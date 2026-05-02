import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { api } from "../api";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const result = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded bg-red-600 flex items-center justify-center font-bold text-white italic text-xl mb-4">
            F1
          </div>
          <h1 className="text-3xl font-bold text-white uppercase italic tracking-tight">Fantasy Racing</h1>
          <p className="text-zinc-400 mt-2">Sign in to manage your team</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-950/30 border border-red-900/50 text-red-300 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-500 hover:text-red-400 font-medium transition-colors">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
