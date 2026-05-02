import { useParams, Link } from "react-router";
import { ChevronLeft, Trophy, Timer, TriangleAlert } from "lucide-react";
import { MOCK_RACES, MOCK_RESULTS, MOCK_LEAGUES } from "../mockData";

export function Results() {
  const { leagueId, raceId } = useParams();
  const race = MOCK_RACES.find(r => r.id === raceId) || MOCK_RACES[0];
  const league = MOCK_LEAGUES.find(l => l.id === leagueId) || MOCK_LEAGUES[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-2 mb-2">
        <Link to={`/league/${league.id}`} className="text-zinc-400 hover:text-white flex items-center gap-1 text-sm font-medium">
          <ChevronLeft className="w-4 h-4" />
          Back to {league.name}
        </Link>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="inline-block bg-zinc-800 text-zinc-300 font-bold text-xs px-2 py-1 rounded border border-zinc-700 mb-3">
            RACE RESULTS
          </div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tight mb-2">
            {race.name}
          </h1>
          <p className="text-zinc-400 font-medium">
            {new Date(race.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-zinc-950/50 border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-400">
                <th className="px-6 py-4 font-medium w-20 text-center">Pos</th>
                <th className="px-6 py-4 font-medium">Driver</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium text-right">Fantasy Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {MOCK_RESULTS.map((result, index) => (
                <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 text-center">
                    {result.pos === 1 ? (
                      <Trophy className="w-5 h-5 text-yellow-500 mx-auto" />
                    ) : result.pos === 2 ? (
                      <Trophy className="w-5 h-5 text-zinc-300 mx-auto" />
                    ) : result.pos === 3 ? (
                      <Trophy className="w-5 h-5 text-amber-700 mx-auto" />
                    ) : (
                      <span className={`font-bold ${result.dnf ? 'text-red-500' : 'text-zinc-400'}`}>
                        {result.pos}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-white">{result.driver}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {result.fastestLap && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold bg-purple-900/30 text-purple-400 px-2 py-1 rounded border border-purple-800/50" title="Fastest Lap">
                          <Timer className="w-3 h-3" /> FL
                        </span>
                      )}
                      {result.dnf && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold bg-red-900/30 text-red-500 px-2 py-1 rounded border border-red-800/50">
                          <TriangleAlert className="w-3 h-3" /> DNF
                        </span>
                      )}
                      {!result.fastestLap && !result.dnf && (
                        <span className="text-zinc-500 text-sm">-</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-mono font-bold text-green-400">+{result.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
