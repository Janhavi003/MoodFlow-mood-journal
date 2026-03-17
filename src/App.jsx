import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Analytics from "./pages/Analytics";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

import useLocalStorage from "./hooks/useLocalStorage";

function AnimatedRoutes({ entries, mood, setMood, addEntry, deleteEntry }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              mood={mood}
              setMood={setMood}
              entries={entries}
              addEntry={addEntry}
            />
          }
        />

        <Route
          path="/journal"
          element={
            <Journal
              entries={entries}
              addEntry={addEntry}
              deleteEntry={deleteEntry}
            />
          }
        />

        <Route
          path="/analytics"
          element={<Analytics entries={entries} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

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