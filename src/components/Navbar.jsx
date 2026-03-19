import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser, logout } from "../utils/auth";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [dark, setDark] = useState(false);

  // Load theme
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
    `px-3 py-2 rounded-xl text-sm transition ${
      location.pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="font-semibold text-white">
          MoodJournal
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2">

          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          {user && (
            <>
              <Link to="/dashboard" className={linkStyle("/dashboard")}>
                Dashboard
              </Link>

              <Link to="/journal" className={linkStyle("/journal")}>
                Journal
              </Link>

              <Link to="/analytics" className={linkStyle("/analytics")}>
                Analytics
              </Link>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 rounded-lg bg-gray-800 text-sm"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Auth Buttons */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="ml-2 px-3 py-1 text-sm text-gray-300"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-3 py-1 text-sm bg-indigo-600 rounded-lg text-white"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3 ml-2">
              <span className="text-sm text-gray-400 hidden sm:block">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm bg-red-500 rounded-lg text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}