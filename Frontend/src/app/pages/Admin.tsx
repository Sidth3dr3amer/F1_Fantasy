import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../api";
import { GripVertical } from "lucide-react";

export function Admin() {
    const [races, setRaces] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedRaceId, setSelectedRaceId] = useState<number | null>(null);
    const [results, setResults] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
    const [raceMeta, setRaceMeta] = useState<any | null>(null);

    useEffect(() => {
        loadRaces();
        loadUsersIfAdmin();
    }, []);

    const currentUserStr = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;
    const isAdminUser = !!currentUser && (currentUser.role === 'ADMIN' || currentUser.username === 'admin');
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect non-admins away from the admin UI
        if (!isAdminUser) {
            navigate('/', { replace: true });
        }
    }, [isAdminUser, navigate]);

    async function loadUsersIfAdmin() {
        if (!isAdminUser) return;
        try {
            const res = await api.get('/admin/users');
            setUsers(res || []);
        } catch (err: any) {
            console.error('Failed to load users', err);
        }
    }

    async function loadRaces() {
        setLoading(true);
        try {
            const res = await api.get('/races');
            setRaces(res || []);
        } catch (err: any) {
            console.error('Failed to load races', err);
            setMessage(err?.message || 'Failed to load races');
        } finally {
            setLoading(false);
        }
    }

    async function openRace(raceId: number) {
        setSelectedRaceId(raceId);
        setMessage(null);
        try {
            const [res, raceInfo] = await Promise.all([
                api.get(`/results/${raceId}`),
                api.get(`/races/${raceId}`)
            ]);

            // res: [{ driver_id, driver_name, finish_pos, fastest_lap, dnf, points }]
            setResults((res || []).map((r: any) => ({
                driverId: r.driver_id,
                driverName: r.driver_name,
                finish_pos: r.finish_pos,
                fastest_lap: !!r.fastest_lap,
                dnf: !!r.dnf,
                points: r.points
            })));

            setRaceMeta(raceInfo || null);
        } catch (err: any) {
            console.error('Failed to load results', err);
            setMessage(err?.message || 'Failed to load results');
        }
    }

    function updateRow(idx: number, changes: Partial<any>) {
        setResults(prev => prev.map((r, i) => (i === idx ? { ...r, ...changes } : r)));
    }

    function handleDragStart(e: React.DragEvent, idx: number) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(idx));
        setDraggingIndex(idx);
    }

    function handleDragOver(e: React.DragEvent, idx: number) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(e: React.DragEvent, toIdx: number) {
        e.preventDefault();
        const from = Number(e.dataTransfer.getData('text/plain'));
        const to = toIdx;
        if (isNaN(from)) {
            setDraggingIndex(null);
            return;
        }
        if (from === to) {
            setDraggingIndex(null);
            return;
        }
        setResults(prev => {
            const next = [...prev];
            const [moved] = next.splice(from, 1);
            next.splice(to, 0, moved);
            // normalize finish_pos based on order
            return next.map((r, i) => ({ ...r, finish_pos: i + 1 }));
        });
        setDraggingIndex(null);
    }

    function handleDragEnd() {
        setDraggingIndex(null);
    }

    async function saveResults() {
        if (!selectedRaceId) return;
        setSaving(true);
        setMessage(null);
        try {
            const payload = {
                results: results.map((r, idx) => ({
                    driverId: r.driverId,
                    finish_pos: Number(idx + 1),
                    fastest_lap: !!r.fastest_lap,
                    dnf: !!r.dnf
                }))
            };

            await api.put(`/results/${selectedRaceId}`, payload);

            // update done; server recalculates, but call calculate endpoint for safety
            await api.post(`/results/calculate/${selectedRaceId}`);

            setMessage('Results saved and recalculated');
            // refresh races and results
            await loadRaces();
            await openRace(selectedRaceId);
        } catch (err: any) {
            console.error('Save failed', err);
            setMessage(err?.message || 'Failed to save results');
        } finally {
            setSaving(false);
        }
    }

    async function promote(userId: number) {
        try {
            await api.post(`/admin/promote/${userId}`);
            await loadUsersIfAdmin();
            setMessage('User promoted to admin');
        } catch (err: any) {
            console.error(err);
            setMessage(err?.message || 'Failed to promote user');
        }
    }

    async function demote(userId: number) {
        try {
            await api.post(`/admin/demote/${userId}`);
            await loadUsersIfAdmin();
            setMessage('User demoted');
        } catch (err: any) {
            console.error(err);
            setMessage(err?.message || 'Failed to demote user');
        }
    }

    async function recalcOnly() {
        if (!selectedRaceId) return;
        setSaving(true);
        setMessage(null);
        try {
            await api.post(`/results/calculate/${selectedRaceId}`);
            setMessage('Recalculation finished');
        } catch (err: any) {
            console.error('Recalc failed', err);
            setMessage(err?.message || 'Failed to recalculate');
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Admin — Race Results</h1>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <h2 className="font-semibold mb-3">User Management</h2>
                {!isAdminUser && (
                    <div className="text-sm text-zinc-400 mb-3">You are not an admin. Sign in as an admin to manage users.</div>
                )}
                {isAdminUser && (
                    <div className="mb-4">
                        <div className="space-y-2">
                            {users.map(u => (
                                <div key={u.id} className="flex items-center justify-between bg-zinc-950/10 p-3 rounded">
                                    <div>
                                        <div className="font-medium">{u.username} <span className="text-xs text-zinc-400">({u.email})</span></div>
                                        <div className="text-xs text-zinc-400">role: {u.role}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {u.role !== 'ADMIN' ? (
                                            <button onClick={() => promote(u.id)} className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 rounded text-sm">Promote</button>
                                        ) : (
                                            <button onClick={() => demote(u.id)} className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-sm">Demote</button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <h2 className="font-semibold mb-3">Races</h2>
                {loading && <div className="text-sm text-zinc-400">Loading races…</div>}
                {message && <div className="text-sm text-red-400 mb-2">{message}</div>}
                <div className="space-y-2">
                    {races.map((r: any) => (
                        <div key={r.id} className="flex items-center justify-between bg-zinc-950/10 p-3 rounded">
                            <div>
                                <div className="font-medium">{r.name}</div>
                                <div className="text-xs text-zinc-400">{new Date(r.raceDate).toLocaleString()}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => openRace(r.id)} className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-sm">Manage Results</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedRaceId && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h3 className="font-semibold">Editing results for race #{selectedRaceId}</h3>
                            {raceMeta?.team_locked && (
                                <div className="text-sm text-amber-400">Race completed — teams locked</div>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={recalcOnly} disabled={saving} className="px-3 py-1 bg-amber-700 hover:bg-amber-600 rounded text-sm">Recalculate Only</button>
                            <button onClick={saveResults} disabled={saving} className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm">Save & Recalculate</button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="text-sm text-zinc-400 mb-2">Drag rows to reorder finish positions</div>
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-zinc-950/50 border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-400">
                                    <th className="px-4 py-2">Pos</th>
                                    <th className="px-4 py-2">Driver</th>
                                    <th className="px-4 py-2">Fastest Lap</th>
                                    <th className="px-4 py-2">DNF</th>
                                    <th className="px-4 py-2">Current Pts</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {results.map((row, idx) => (
                                    <tr
                                        key={row.driverId}
                                        className={`hover:bg-zinc-800/30 transition-colors ${draggingIndex === idx ? 'opacity-60' : ''}`}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, idx)}
                                        onDragOver={(e) => handleDragOver(e, idx)}
                                        onDrop={(e) => handleDrop(e, idx)}
                                        onDragEnd={handleDragEnd}
                                    >
                                        <td className="px-4 py-2 w-28">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs w-6 text-center font-medium">{idx + 1}</span>
                                                <GripVertical className="w-4 h-4 text-zinc-400 cursor-grab" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="font-medium">{row.driverName}</div>
                                            <div className="text-xs text-zinc-500">id: {row.driverId}</div>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <input type="checkbox" checked={!!row.fastest_lap} onChange={(e) => updateRow(idx, { fastest_lap: e.target.checked })} />
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <input type="checkbox" checked={!!row.dnf} onChange={(e) => updateRow(idx, { dnf: e.target.checked })} />
                                        </td>
                                        <td className="px-4 py-2 text-right font-mono">{row.points ?? '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
