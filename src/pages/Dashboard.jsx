import MoodSelector from "../components/MoodSelector";
import JournalEditor from "../components/JournalEditor";
import EntryList from "../components/EntryList";

export default function Dashboard({
  mood,
  setMood,
  entries,
  addEntry,
  deleteEntry,
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Mood Journal</h1>

      <p className="mt-2 text-gray-500">
        How are you feeling today?
      </p>

      <MoodSelector selected={mood} setSelected={setMood} />

      <JournalEditor mood={mood} addEntry={addEntry} />

      <EntryList entries={entries} deleteEntry={deleteEntry} />
    </div>
  );
}