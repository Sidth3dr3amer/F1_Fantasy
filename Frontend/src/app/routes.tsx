import { createBrowserRouter, useRouteError, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { League } from "./pages/League";
import { TeamBuilder } from "./pages/TeamBuilder";
import { Results } from "./pages/Results";
import { Leaderboard } from "./pages/Leaderboard";
import { Admin } from "./pages/Admin";

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  // Handle 404s and Route errors gracefully
  let errorMessage = String(error);
  if (error && typeof error === 'object' && 'statusText' in error) {
    errorMessage = `${(error as any).status} ${(error as any).statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message + '\n' + error.stack;
  }

  return (
    <div className="p-8 bg-red-950 text-white min-h-screen font-mono flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Application Error</h1>
      <pre className="bg-black/50 p-6 rounded-xl whitespace-pre-wrap max-w-3xl text-left overflow-auto">
        {errorMessage}
      </pre>
      <a href="/" className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-colors">
        Return to Home
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/register",
    Component: Register,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, Component: Dashboard },
      { path: "league", Component: League },
      { path: "league/:leagueId", Component: League },
      { path: "league/:leagueId/race/:raceId/team-builder", Component: TeamBuilder },
      { path: "league/:leagueId/race/:raceId/results", Component: Results },
      { path: "admin", Component: Admin },
      { path: "leaderboard", Component: Leaderboard },
      { path: "*", Component: () => <Navigate to="/" replace /> }
    ],
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />
  }
]);
