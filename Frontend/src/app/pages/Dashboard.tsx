import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Plus, Users, KeyRound } from "lucide-react";
import { api } from "../api";

type LeagueSummary = {
  id: number;
  name: string;
  code?: string;
  type?: string;
  member_count?: number;
};

export function Dashboard() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [leagues, setLeagues] = useState<LeagueSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [joinCodeInput, setJoinCodeInput] = useState("");
  const [createNameInput, setCreateNameInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function loadLeagues() {
    const data = await api.get("/leagues");
    setLeagues(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      try {
        setLoading(true);
        setError(null);

        const data = await api.get("/leagues");
        if (mounted) setLeagues(Array.isArray(data) ? data : []);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to load leagues");
          setLeagues([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadDashboard();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold uppercase italic tracking-tight">My Garage</h1>
          <p className="text-zinc-400 mt-1">Manage your fantasy leagues and track your performance.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowJoinModal(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors border border-zinc-700"
          >
            <KeyRound className="w-4 h-4" />
            Join League
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create League
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center gap-3 text-zinc-400 mb-2">
            <Users className="w-5 h-5 text-blue-400" />
            <h3 className="font-medium">Active Leagues</h3>
          </div>
          <p className="text-3xl font-bold">{leagues.length}</p>
          {loading && <p className="text-xs text-zinc-500 mt-1">Loading...</p>}
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold uppercase italic mb-4">Your Leagues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leagues.map((league) => (
            <Link
              key={league.id}
              to={`/league/${league.id}`}
              className="group bg-zinc-900 border border-zinc-800 hover:border-red-600/50 rounded-xl p-6 transition-all hover:bg-zinc-800/50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg group-hover:text-red-500 transition-colors">{league.name}</h3>
                <span className="bg-zinc-950 text-xs font-bold px-2 py-1 rounded border border-zinc-800">
                  {league.type || "LEAGUE"}
                </span>
              </div>
              <div className="flex items-center text-zinc-400 text-sm gap-2">
                <Users className="w-4 h-4" />
                <span>{(league.member_count ?? 0).toLocaleString()} members</span>
              </div>
              {league.code && <div className="text-xs text-zinc-500 mt-3">Code: {league.code}</div>}
            </Link>
          ))}
          {!loading && leagues.length === 0 && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-sm text-zinc-500">
              No leagues yet. Create one or join with a code.
            </div>
          )}
        </div>
      </div>

      {/* Simple Modal Mockups */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Join a League</h3>
            <input
              type="text"
              placeholder="Enter League Code"
              value={joinCodeInput}
              onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white mb-4"
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowJoinModal(false)} className="px-4 py-2 rounded-lg font-medium text-zinc-400 hover:text-white">Cancel</button>
              <button
                onClick={async () => {
                  try {
                    setSubmitting(true);
                    await api.post("/leagues/join", { code: joinCodeInput.trim().toUpperCase() });
                    setShowJoinModal(false);
                    setJoinCodeInput("");
                    await loadLeagues();
                  } catch (err) {
                    setError(err instanceof Error ? err.message : "Failed to join league");
                  } finally {
                    setSubmitting(false);
                  }
                }}
                disabled={submitting || !joinCodeInput.trim()}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium"
              >
                {submitting ? "Joining..." : "Join"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Create New League</h3>
            <input
              type="text"
              placeholder="League Name"
              value={createNameInput}
              onChange={(e) => setCreateNameInput(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white mb-4"
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 rounded-lg font-medium text-zinc-400 hover:text-white">Cancel</button>
              <button
                onClick={async () => {
                  try {
                    setSubmitting(true);
                    const res = await api.post("/leagues/create", { name: createNameInput.trim() });
                    setShowCreateModal(false);
                    setCreateNameInput("");
                    if (res && res.id) navigate(`/league/${res.id}`);
                    await loadLeagues();
                  } catch (err) {
                    setError(err instanceof Error ? err.message : "Failed to create league");
                  } finally {
                    setSubmitting(false);
                  }
                }}
                disabled={submitting || !createNameInput.trim()}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium"
              >
                {submitting ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
