import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Analytics from "./pages/Analytics";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

import useLocalStorage from "./hooks/useLocalStorage";
import { getCurrentUser } from "./utils/auth";

/* ---------------- Protected Route ---------------- */
function ProtectedRoute({ children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

/* ---------------- Animated Routes ---------------- */
function AnimatedRoutes({
  entries,
  mood,
  setMood,
  addEntry,
  deleteEntry,
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
                mood={mood}
                setMood={setMood}
                entries={entries}
                addEntry={addEntry}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/journal"
          element={
            <ProtectedRoute>
              <Journal
                entries={entries}
                addEntry={addEntry}
                deleteEntry={deleteEntry}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics entries={entries} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/* ---------------- MAIN APP ---------------- */
export default function App() {
  const [entries, setEntries] = useLocalStorage("entries", []);
  const [mood, setMood] = useState("Happy");

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
        
        <Navbar />

        <AnimatedRoutes
          entries={entries}
          mood={mood}
          setMood={setMood}
          addEntry={addEntry}
          deleteEntry={deleteEntry}
        />
      </div>
    </Router>
  );
}