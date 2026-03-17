import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [dark, setDark] = useState(false);

  // Load theme from localStorage
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

  const linkStyle = (path) =>
    `px-3 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-indigo-600 text-white"
        : "hover:bg-gray-200 dark:hover:bg-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          MoodJournal
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2">

          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/journal" className={linkStyle("/journal")}>
            Journal
          </Link>

          <Link to="/analytics" className={linkStyle("/analytics")}>
            Analytics
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
          >
            {dark ? "dark" : "light"}
          </button>

        </div>
      </div>
    </nav>
  );
}