import { Trophy, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../api";

export function Leaderboard() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let intervalId: number | undefined;

    async function load() {
      setLoading(true);
      try {
        const res = await api.get('/leaderboard/global');
        if (!mounted) return;
        setData(res);
      } catch (err: any) {
        if (!mounted) return;
        setError(err?.message || 'Failed to load leaderboard');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    // Poll while component mounted so leaderboards update during simulations
    intervalId = window.setInterval(load, 3000);

    return () => { mounted = false; if (intervalId) clearInterval(intervalId); };
  }, []);

  const top = data?.top5 || [];
  const top1 = data?.max_overall || top[0] || null;
  const totalPlayers = data?.total_players ?? '-';
  const user = data?.user || null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold uppercase italic tracking-tight">Global Leaderboard</h1>
        <p className="text-zinc-400 mt-1">See how you stack up against the entire world.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-950/10 border border-yellow-700/50 rounded-xl p-6 relative overflow-hidden">
          <Trophy className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-600/20" />
          <h3 className="text-yellow-500 font-bold text-sm uppercase mb-1">World #1</h3>
          <p className="text-2xl font-bold text-white mb-2">{top1 ? top1.username : '—'}</p>
          <p className="font-mono text-yellow-400 font-bold">{top1 ? Number(top1.totalPts).toLocaleString() : '—'} PTS</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-zinc-400 font-bold text-sm uppercase mb-1">Total Players</h3>
          <p className="text-3xl font-bold text-white mb-1">{loading ? '…' : totalPlayers.toLocaleString?.() ?? totalPlayers}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-zinc-400 font-bold text-sm uppercase mb-1">Your Global Rank</h3>
          <div className="flex items-end gap-3">
            <p className="text-3xl font-bold text-white">{user ? user.rank : '—'}</p>
            <p className="text-sm font-medium text-green-500 flex items-center mb-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              {user ? Number(user.totalPts).toLocaleString() : '—'}
            </p>
          </div>
        </div>
      </div>

      {data?.current_race && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Current Race Top</div>
              <div className="font-medium text-white">{data.current_race.name} (#{data.current_race.raceId})</div>
              <div className="text-xs text-zinc-400">Top points: {data.current_race.maxPoints}</div>
            </div>
            <div>
              {data.current_race.leaders.map((l: any) => (
                <div key={l.userId} className="text-sm text-white">{l.username} — {l.points}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-zinc-950/50 border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-400">
                <th className="px-6 py-4 font-medium w-24 text-center">Rank</th>
                <th className="px-6 py-4 font-medium">Team Manager</th>
                <th className="px-6 py-4 font-medium text-center hidden sm:table-cell">Races Played</th>
                <th className="px-6 py-4 font-medium text-right">Total Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {top.map((user: any, index: number) => {
                const isCurrentUser = user.userId === data?.user?.userId;
                return (
                  <tr
                    key={user.userId}
                    className={`transition-colors ${isCurrentUser ? "bg-red-950/20" : "hover:bg-zinc-800/30"}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center gap-2">
                        {index === 0 ? (
                          <Trophy className="w-5 h-5 text-yellow-500" />
                        ) : index === 1 ? (
                          <Trophy className="w-5 h-5 text-zinc-300" />
                        ) : index === 2 ? (
                          <Trophy className="w-5 h-5 text-amber-700" />
                        ) : (
                          <span className="font-bold text-zinc-500 w-5 text-center">{index + 1}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isCurrentUser ? "text-red-400" : "text-white"}`}>
                          {user.username}
                        </span>
                        {isCurrentUser && (
                          <span className="text-[10px] uppercase font-bold bg-red-600/20 text-red-500 px-1.5 py-0.5 rounded border border-red-600/20">
                            You
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center hidden sm:table-cell text-zinc-400 font-mono">
                      —
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-mono font-bold text-white">{Number(user.totalPts).toLocaleString()}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
