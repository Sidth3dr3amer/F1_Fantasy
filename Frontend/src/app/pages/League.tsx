import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Users, Trophy, ChevronLeft, Plus, ChevronRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { api } from "../api";

type LeagueSummary = {
    id: number;
    name: string;
    code?: string;
    type?: string;
    member_count?: number;
};

type LeagueDetails = LeagueSummary & {
    ownerId?: number;
    members: LeagueMember[];
};

type LeagueMember = {
    userId: number;
    username: string;
};

type LeaderboardEntry = {
    rank: number;
    username: string;
    season_total: number;
};

type Race = {
    id: number;
    name: string;
    status: string;
    raceDate?: string;
    raceStart?: string;
    raceEnd?: string;
};

type RaceResult = {
    driver_id: number;
    driver_name: string;
    finish_pos: number | null;
    fastest_lap: boolean;
    dnf: boolean;
    points: number;
};
export function League() {
    const { leagueId } = useParams();
    const [activeTab, setActiveTab] = useState<"leaderboard" | "members" | "races">("leaderboard");
    const [league, setLeague] = useState<LeagueDetails | null>(null);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [races, setRaces] = useState<Race[]>([]);
    const [currentRace, setCurrentRace] = useState<Race | null>(null);
    const [currentRaceResults, setCurrentRaceResults] = useState<RaceResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const pollingRef = useRef(false);
    useEffect(() => {
        let cancelled = false;

        async function loadInitial() {
            if (!leagueId) return;

            try {
                setLoading(true);
                setError("");

                const [leagueData, leaderboardData, raceData] = await Promise.all([
                    api.get(`/leagues/${leagueId}`),
                    api.get(`/leaderboard/${leagueId}`),
                    api.get("/races"),
                ]);

                if (cancelled) return;

                setLeague(leagueData);
                setLeaderboard(leaderboardData);
                setRaces(raceData);

                // pick current race
                let picked: Race | null = null;

                if (raceData?.length) {
                    const ongoing = raceData.find(
                        (r: Race) => (r.status || "").toUpperCase() === "ONGOING"
                    );

                    if (ongoing) {
                        picked = ongoing;
                    } else {
                        const completed = raceData
                            .filter((r: Race) => (r.status || "").toUpperCase() === "COMPLETED")
                            .sort(
                                (a: Race, b: Race) =>
                                    (b.raceDate ? new Date(b.raceDate).getTime() : 0) -
                                    (a.raceDate ? new Date(a.raceDate).getTime() : 0)
                            );

                        picked = completed[0] || raceData[raceData.length - 1];
                    }
                }

                setCurrentRace(picked);

                // load race results ONCE
                if (picked) {
                    try {
                        const results = await api.get(`/results/${picked.id}`);
                        if (!cancelled) setCurrentRaceResults(results || []);
                    } catch {
                        if (!cancelled) setCurrentRaceResults([]);
                    }
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "Failed to load league");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadInitial();

        return () => {
            cancelled = true;
        };
    }, [leagueId]);

    useEffect(() => {
        if (activeTab !== "leaderboard" || !leagueId) return;

        if (pollingRef.current) return; // 🚫 prevent duplicate loops
        pollingRef.current = true;

        let cancelled = false;

        async function poll() {
            while (!cancelled) {
                try {
                    const data = await api.get(`/leaderboard/${leagueId}`);
                    if (!cancelled) setLeaderboard(data);
                } catch { }

                await new Promise((res) => setTimeout(res, 3000));
            }
        }

        poll();

        return () => {
            cancelled = true;
            pollingRef.current = false;
        };
    }, [activeTab, leagueId]);
    useEffect(() => { /* initial load */ }, [leagueId]);

    useEffect(() => { /* leaderboard polling */ }, [activeTab, leagueId]);

    // 👇 ADD THIS HERE
    useEffect(() => {
        if (!leagueId || !currentRace) return;
        if (currentRace.status !== "ONGOING") return;

        let cancelled = false;

        async function pollRace() {
            while (!cancelled) {
                try {
                    const results = await api.get(`/results/${currentRace.id}`);
                    if (!cancelled) setCurrentRaceResults(results || []);
                } catch { }

                await new Promise((res) => setTimeout(res, 3000));
            }
        }

        pollRace();

        return () => {
            cancelled = true;
        };
    }, [currentRace, leagueId]);
    if (!leagueId) return <AllLeaguesView />;

    if (loading) {
        return <div className="text-zinc-400">Loading league...</div>;
    }

    if (error || !league) {
        return (
            <div className="space-y-4">
                <Link to="/league" className="text-zinc-400 hover:text-white flex items-center gap-1 text-sm font-medium">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Leagues
                </Link>
                <div className="bg-red-950/30 border border-red-900/50 text-red-300 rounded-xl p-4">
                    {error || "League not found"}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-2">
                <Link to="/league" className="text-zinc-400 hover:text-white flex items-center gap-1 text-sm font-medium">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Leagues
                </Link>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                    <div className="inline-block bg-red-600/20 text-red-500 font-bold text-xs px-2 py-1 rounded border border-red-600/20 mb-3">LEAGUE</div>
                    <h1 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tight mb-2">{league.name}</h1>
                    <div className="flex items-center gap-4 text-zinc-400">
                        <span className="flex items-center gap-1.5 text-sm">
                            <Users className="w-4 h-4" /> {league.members.length.toLocaleString()} Members
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span className="text-sm">League Code: {league.code}</span>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-zinc-800 overflow-x-auto no-scrollbar">
                <button
                    onClick={() => setActiveTab("leaderboard")}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === "leaderboard" ? "border-red-600 text-white" : "border-transparent text-zinc-400 hover:text-zinc-200"
                        }`}
                >
                    Leaderboard
                </button>
                <button
                    onClick={() => setActiveTab("members")}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === "members" ? "border-red-600 text-white" : "border-transparent text-zinc-400 hover:text-zinc-200"
                        }`}
                >
                    Members
                </button>
                <button
                    onClick={() => setActiveTab("races")}
                    className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === "races" ? "border-red-600 text-white" : "border-transparent text-zinc-400 hover:text-zinc-200"
                        }`}
                >
                    Races
                </button>
            </div>

            {activeTab === "leaderboard" && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-800">
                                <th className="px-6 py-4 text-sm font-semibold text-zinc-300">Rank</th>
                                <th className="px-6 py-4 text-sm font-semibold text-zinc-300">Player</th>
                                <th className="px-6 py-4 text-sm font-semibold text-zinc-300 text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((user, index) => (
                                <tr key={user.username} className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-zinc-300">
                                        <div className="flex items-center">
                                            {index === 0 ? (
                                                <Trophy className="w-5 h-5 text-yellow-500" />
                                            ) : index === 1 ? (
                                                <Trophy className="w-5 h-5 text-zinc-300" />
                                            ) : index === 2 ? (
                                                <Trophy className="w-5 h-5 text-amber-700" />
                                            ) : (
                                                <span className="font-bold text-zinc-500">{user.rank}</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-zinc-300">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-white">{user.username}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-red-400 text-right font-mono">{user.season_total.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {leaderboard.length === 0 && (
                        <div className="p-6 text-sm text-zinc-500">No leaderboard points yet.</div>
                    )}
                    {currentRace && currentRaceResults && currentRaceResults.length > 0 && (
                        <div className="p-6 border-t border-zinc-800">
                            <div className="mb-3">
                                <div className="text-xs text-zinc-400 uppercase tracking-wide">Current Race Order</div>
                                <div className="font-medium text-white">{currentRace.name} (#{currentRace.id})</div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[480px]">
                                    <thead>
                                        <tr className="border-b border-zinc-800 text-xs text-zinc-400">
                                            <th className="px-4 py-2">Pos</th>
                                            <th className="px-4 py-2">Driver</th>
                                            <th className="px-4 py-2 text-right">Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...currentRaceResults]
                                            .sort((a, b) => (a.finish_pos ?? 999) - (b.finish_pos ?? 999))
                                            .map((r) => (
                                                <tr key={r.driver_id} className="border-b border-zinc-800 hover:bg-zinc-800/20">
                                                    <td className="px-4 py-3 text-zinc-300">{r.finish_pos ?? 'DNF'}</td>
                                                    <td className="px-4 py-3 text-white">{r.driver_name}</td>
                                                    <td className="px-4 py-3 text-right font-mono text-red-400">{r.points}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {activeTab === "members" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {league.members.map((user) => (
                        <div key={user.userId} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
                            <div className="font-medium text-white">{user.username}</div>
                            <div className="text-sm text-zinc-500 mt-1">League member</div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "races" && (
                <div className="space-y-3">
                    {races.map((race) => {
                        const statusUpper = (race.status || '').toString().toUpperCase();
                        const isCompleted = statusUpper === 'COMPLETED';
                        const isOngoing = statusUpper === 'ONGOING';
                        const prettyStatus = statusUpper ? statusUpper.charAt(0) + statusUpper.slice(1).toLowerCase() : '';

                        return (
                            <Link
                                key={race.id}
                                to={isCompleted ? `/league/${league.id}/race/${race.id}/results` : `/league/${league.id}/race/${race.id}/team-builder`}
                                className={`block bg-zinc-900 border ${isOngoing ? 'border-red-600/50' : 'border-zinc-800'} rounded-lg p-4 hover:border-zinc-700 transition-colors`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-white">{race.name}</div>
                                        <div className="text-sm text-zinc-500 mt-1">Status: {prettyStatus}</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Trophy className="w-5 h-5 text-zinc-600" />
                                        <span className="text-sm text-zinc-300 font-medium">{isCompleted ? 'View Results' : 'Manage Team'}</span>
                                        <ChevronRight className="w-4 h-4 text-zinc-400" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    {races.length === 0 && (
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm text-zinc-500">
                            No races available.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function AllLeaguesView() {
    const navigate = useNavigate();
    const [joinCode, setJoinCode] = useState("");
    const [userLeagues, setUserLeagues] = useState<LeagueSummary[]>([]);
    const [publicLeagues, setPublicLeagues] = useState<LeagueSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [joining, setJoining] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function loadLeagues() {
            try {
                setLoading(true);
                setError("");

                const [userLeagueData, publicLeagueData] = await Promise.all([
                    api.get("/leagues"),
                    api.get("/leagues/public"),
                ]);

                if (cancelled) return;

                setUserLeagues(userLeagueData);
                setPublicLeagues(publicLeagueData);
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "Failed to load leagues");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadLeagues();

        return () => {
            cancelled = true;
        };
    }, []);

    async function handleJoinLeague(code = joinCode) {
        if (!code.trim()) return;

        try {
            setJoining(true);
            setError("");

            const result = await api.post("/leagues/join", { code: code.trim().toUpperCase() });
            navigate(`/league/${result.league.id}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to join league");
        } finally {
            setJoining(false);
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                    <div className="inline-block bg-red-600/20 text-red-500 font-bold text-xs px-2 py-1 rounded border border-red-600/20 mb-3">LEAGUES</div>
                    <h1 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tight mb-2">All Leagues</h1>
                    <p className="text-zinc-400">Browse and join leagues, or create your own</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Join a League</h2>
                    <input
                        type="text"
                        placeholder="Enter league code"
                        value={joinCode}
                        onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleJoinLeague();
                        }}
                        maxLength={6}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-600/50 mb-3"
                    />
                    <button
                        onClick={() => handleJoinLeague()}
                        disabled={joining || !joinCode.trim()}
                        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
                    >
                        {joining ? "Joining..." : "Join"}
                    </button>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4">Create League</h2>
                    <p className="text-sm text-zinc-400 mb-4">Start your own competitive league</p>
                    <Link to="/league" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 text-red-400 hover:text-red-300 font-medium rounded-lg transition-colors">
                        <Plus className="w-4 h-4" /> Create League
                    </Link>
                </div>
            </div>

            {error && (
                <div className="bg-red-950/30 border border-red-900/50 text-red-300 rounded-xl p-4">
                    {error}
                </div>
            )}

            <div>
                <h2 className="text-xl font-bold text-white mb-4">Your Leagues</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {loading && <div className="text-sm text-zinc-500">Loading your leagues...</div>}
                    {!loading && userLeagues.map((league) => (
                        <Link key={league.id} to={`/league/${league.id}`} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 hover:bg-zinc-800/50 transition-all group">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">{league.name}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{league.member_count ?? 0} members</p>
                                </div>
                                <Users className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </div>
                            <div className="text-xs text-zinc-500">Code: {league.code}</div>
                        </Link>
                    ))}
                    {!loading && userLeagues.length === 0 && (
                        <div className="text-sm text-zinc-500">You have not joined any leagues yet.</div>
                    )}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white mb-4">Public Leagues</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {loading && <div className="text-sm text-zinc-500">Loading public leagues...</div>}
                    {!loading && publicLeagues.map((league) => (
                        <div key={league.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 hover:bg-zinc-800/50 transition-all group">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">{league.name}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{league.member_count ?? 0} members</p>
                                </div>
                                <Trophy className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </div>
                            <Link to={`/league/${league.id}`} className="text-xs text-red-400 hover:text-red-300 font-medium transition-colors">
                                View League
                            </Link>
                        </div>
                    ))}
                    {!loading && publicLeagues.length === 0 && (
                        <div className="text-sm text-zinc-500">No public leagues available.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
