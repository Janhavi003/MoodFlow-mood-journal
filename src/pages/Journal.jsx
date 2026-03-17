import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import MoodSelector from "../components/MoodSelector";
import JournalEditor from "../components/JournalEditor";
import EntryList from "../components/EntryList";
import SearchBar from "../components/SearchBar";

export default function Journal({ entries, addEntry, deleteEntry }) {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMood, setFilterMood] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      const matchesSearch = entry.text
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesMood = filterMood
        ? entry.mood === filterMood
        : true;

      const matchesTag = filterTag
        ? entry.tags.includes(filterTag)
        : true;

      return matchesSearch && matchesMood && matchesTag;
    });
  }, [entries, searchQuery, filterMood, filterTag]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Journal</h1>
      <p className="text-gray-500">Track your thoughts and emotions.</p>

      <div className="mt-6 card p-6">
        <MoodSelector
          selected={selectedMood}
          setSelected={setSelectedMood}
        />

        <JournalEditor mood={selectedMood} addEntry={addEntry} />
      </div>

      {/* Search + Filters */}
      <div className="card p-4 mt-8 flex flex-col md:flex-row gap-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <select
          value={filterMood}
          onChange={(e) => setFilterMood(e.target.value)}
          className="input"
        >
          <option value="">All Moods</option>
          <option value="Happy">Happy</option>
          <option value="Good">Good</option>
          <option value="Neutral">Neutral</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
        </select>

        <input
          type="text"
          placeholder="Filter by tag"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="input"
        />
      </div>

      {/* Entries */}
      <div className="mt-8">
        {filteredEntries.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-gray-500">
              No entries yet. Start writing your first journal ✨
            </p>
          </div>
        ) : (
          <EntryList
            entries={filteredEntries}
            deleteEntry={deleteEntry}
          />
        )}
      </div>

    </motion.div>
  );
}