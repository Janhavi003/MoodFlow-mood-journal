import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Dashboard
        mood={mood}
        setMood={setMood}
        entries={entries}
        addEntry={addEntry}
        deleteEntry={deleteEntry}
      />
    </div>
  );
}