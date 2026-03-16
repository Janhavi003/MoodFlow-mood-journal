import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Analytics from "./pages/Analytics";

import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [entries, setEntries] = useLocalStorage("entries", []);
  const [mood, setMood] = useState("Happy");

  // Add new entry
  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  // Delete entry
  const deleteEntry = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                mood={mood}
                setMood={setMood}
                entries={entries}
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

      </div>
    </Router>
  );
}