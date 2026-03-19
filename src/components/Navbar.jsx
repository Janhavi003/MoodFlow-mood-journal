import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser, logout } from "../utils/auth";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkStyle = (path) =>
    `px-3 py-2 rounded-lg text-sm transition ${
      location.pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link to="/" className="font-semibold text-white">
          MoodJournal
        </Link>

        <div className="flex items-center gap-2">

          {user && (
            <>
              <Link to="/dashboard" className={linkStyle("/dashboard")}>Dashboard</Link>
              <Link to="/journal" className={linkStyle("/journal")}>Journal</Link>
              <Link to="/analytics" className={linkStyle("/analytics")}>Analytics</Link>
            </>
          )}

          <button
            onClick={toggleTheme}
            className="px-3 py-1 bg-gray-800 rounded-lg text-sm"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-lg text-sm text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}