import { useState, useMemo } from "react";
import MoodSelector from "../components/MoodSelector";
import JournalEditor from "../components/JournalEditor";
import EntryList from "../components/EntryList";
import SearchBar from "../components/SearchBar";

export default function Journal({ entries, addEntry, deleteEntry }) {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMood, setFilterMood] = useState("");
  const [filterTag, setFilterTag] = useState("");

  // Filter entries based on search, mood, and tags
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
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Journal</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Track your thoughts and emotions.
        </p>
      </div>

      {/* Mood Selection */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">
          How are you feeling today?
        </h2>
        <MoodSelector
          selected={selectedMood}
          setSelected={setSelectedMood}
        />
      </div>

      {/* Journal Editor */}
      <JournalEditor mood={selectedMood} addEntry={addEntry} />

      {/* Search + Filters */}
      <div className="mt-8 space-y-4">

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <div className="flex flex-wrap gap-4">

          {/* Mood Filter */}
          <select
            value={filterMood}
            onChange={(e) => setFilterMood(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="">All Moods</option>
            <option value="Happy">Happy</option>
            <option value="Good">Good</option>
            <option value="Neutral">Neutral</option>
            <option value="Sad">Sad</option>
            <option value="Angry">Angry</option>
          </select>

          {/* Tag Filter */}
          <input
            type="text"
            placeholder="Filter by tag"
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* Entry Timeline */}
      <div className="mt-8">
        {filteredEntries.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            No entries found.
          </p>
        ) : (
          <EntryList
            entries={filteredEntries}
            deleteEntry={deleteEntry}
          />
        )}
      </div>
    </div>
  );
}