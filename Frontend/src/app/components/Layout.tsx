import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { Trophy, Users, LayoutDashboard, LogOut, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LeagueDropdown } from "./LeagueDropdown";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [leagueDropdownOpen, setLeagueDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLeagueDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    const t = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!t) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const handleLogout = async () => {
    const t = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    try {
      if (t) {
        const base = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
        await fetch(`${base}/auth/logout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` }
        });
      }
    } catch (err) {
      console.warn('Logout API failed', err);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      navigate('/login', { replace: true });
    }
  };

  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Global Leaderboard", path: "/leaderboard", icon: <Trophy className="w-5 h-5" /> },
  ];
  const userStr = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  const user = userStr ? JSON.parse(userStr) : null;
  const isAdminUser = !!user && (user.isAdmin || user.role === 'ADMIN' || user.username === 'admin');

  if (isAdminUser) {
    navItems.push({ name: 'Admin', path: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> });
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 bg-zinc-900 border-r border-zinc-800 z-50">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-bold text-white italic">
            F1
          </div>
          <h1 className="text-xl font-bold tracking-tight uppercase italic">Fantasy</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                ? "bg-red-600/10 text-red-500 border border-red-600/20"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}

          {/* Leagues Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setLeagueDropdownOpen(!leagueDropdownOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${leagueDropdownOpen
                ? "bg-red-600/10 text-red-500 border border-red-600/20"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Leagues</span>
              <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${leagueDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {leagueDropdownOpen && (
              <LeagueDropdown onClose={() => setLeagueDropdownOpen(false)} />
            )}
          </div>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center font-bold text-white italic text-sm">
            F1
          </div>
          <h1 className="text-lg font-bold tracking-tight uppercase italic">Fantasy</h1>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[69px] bg-zinc-950 z-40 p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg transition-colors ${location.pathname === item.path
                ? "bg-red-600/10 text-red-500 border border-red-600/20"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
            >
              {item.icon}
              <span className="font-medium text-lg">{item.name}</span>
            </Link>
          ))}

          {/* Mobile Leagues Dropdown */}
          <button
            onClick={() => setLeagueDropdownOpen(!leagueDropdownOpen)}
            className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg transition-colors text-lg ${leagueDropdownOpen
              ? "bg-red-600/10 text-red-500 border border-red-600/20"
              : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Leagues</span>
            <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${leagueDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {leagueDropdownOpen && (
            <LeagueDropdown onClose={() => setLeagueDropdownOpen(false)} />
          )}

          <div className="mt-auto pt-4 border-t border-zinc-800">
            <button
              onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}
              className="w-full text-left flex items-center gap-3 px-4 py-4 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-lg">Logout</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="md:pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
