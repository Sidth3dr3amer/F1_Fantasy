import { Link } from "react-router";
import { Plus, Search, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "../api";

interface LeagueDropdownProps {
    onClose: () => void;
}

export function LeagueDropdown({ onClose }: LeagueDropdownProps) {
    const [joinCode, setJoinCode] = useState("");
    const [userLeagues, setUserLeagues] = useState<any[]>([]);
    const [publicLeagues, setPublicLeagues] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Load leagues from backend
    useEffect(() => {
        let mounted = true;
        async function load() {
            setLoading(true);
            try {
                const [user, pub] = await Promise.all([
                    api.get('/leagues'),
                    api.get('/leagues/public')
                ]);
                if (!mounted) return;
                setUserLeagues(user || []);
                setPublicLeagues(pub || []);
                setError(null);
            } catch (err: any) {
                console.error('Failed to load leagues', err);
                if (!mounted) return;
                setError(err?.message || 'Failed to load leagues');
            } finally {
                if (mounted) setLoading(false);
            }
        }
        load();
        return () => {
            mounted = false;
        };
    }, []);

    const handleJoinLeague = async () => {
        if (!joinCode.trim()) return;
        try {
            setLoading(true);
            const res = await api.post('/leagues/join', { code: joinCode.toUpperCase() });
            if (res && res.league) {
                // Prepend the newly joined league to the user's list
                setUserLeagues((prev) => [res.league, ...prev]);
                setJoinCode("");
            }
        } catch (err: any) {
            console.error('Join league failed', err);
            alert(err?.message || 'Failed to join league');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Mobile Backdrop */}
            <div
                className="md:hidden fixed inset-0 top-[69px] bg-black/40 z-40"
                onClick={onClose}
            />

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 md:left-full md:ml-2 w-full md:w-auto min-w-0 md:min-w-[18rem] max-w-full md:max-w-md bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-b border-zinc-800 px-4 py-3">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">Leagues</h3>
                </div>

                <div className="max-h-96 overflow-y-auto">
                    {/* Loading / Error */}
                    {loading && (
                        <div className="px-4 pt-3 pb-2 text-xs text-zinc-400">Loading leagues…</div>
                    )}
                    {error && (
                        <div className="px-4 pt-3 pb-2 text-xs text-red-400">{error}</div>
                    )}

                    {/* Your Leagues Section */}
                    {userLeagues.length > 0 && (
                        <>
                            <div className="px-4 pt-3 pb-2">
                                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Your Leagues</p>
                                <div className="space-y-1">
                                    {userLeagues.map((league) => (
                                        <Link
                                            key={league.id}
                                            to={`/league/${league.id}`}
                                            onClick={onClose}
                                            className="block px-3 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800/50 hover:text-white rounded transition-colors group"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="font-medium group-hover:text-red-400 transition-colors">{league.name}</div>
                                                    <div className="text-xs text-zinc-500">{league.member_count} members</div>
                                                </div>
                                                <span className="text-xs text-zinc-600 group-hover:text-red-400">{league.code ? `#${league.code}` : ''}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-zinc-800" />
                        </>
                    )}

                    {/* Public Leagues Section */}
                    {publicLeagues.length > 0 && (
                        <div className="px-4 py-3">
                            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Public Leagues</p>
                            <div className="space-y-1 mb-3">
                                {publicLeagues.slice(0, 3).map((league) => (
                                    <button
                                        key={league.id}
                                        onClick={onClose}
                                        className="w-full text-left px-3 py-2.5 text-sm text-zinc-400 hover:bg-zinc-800/50 hover:text-white rounded transition-colors group flex items-start justify-between"
                                    >
                                        <div>
                                            <div className="font-medium group-hover:text-red-400 transition-colors">{league.name}</div>
                                            <div className="text-xs text-zinc-600">{league.member_count} members</div>
                                        </div>
                                        <LogIn className="w-4 h-4 text-zinc-600 group-hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0" />
                                    </button>
                                ))}
                            </div>
                            <Link
                                to="/league"
                                onClick={onClose}
                                className="block px-3 py-2 text-sm text-zinc-400 hover:text-red-400 hover:bg-zinc-800/30 rounded transition-colors text-center font-medium"
                            >
                                View All Leagues →
                            </Link>
                        </div>
                    )}

                    <div className="border-t border-zinc-800" />

                    {/* Join League */}
                    <div className="px-4 py-3">
                        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Join League</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter code"
                                value={joinCode}
                                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                                onKeyPress={(e) => e.key === "Enter" && handleJoinLeague()}
                                maxLength={6}
                                className="flex-1 px-3 py-2 text-xs bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-red-600/50 transition-colors"
                            />
                            <button
                                onClick={handleJoinLeague}
                                disabled={loading || !joinCode.trim()}
                                className="px-3 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-medium rounded transition-colors"
                                title="Join league with code"
                            >
                                <Search className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-zinc-800" />

                    {/* Create League */}
                    <div className="px-4 py-3">
                        <Link
                            to="/league"
                            onClick={onClose}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 text-red-400 hover:text-red-300 rounded font-medium text-sm transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Create League
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
