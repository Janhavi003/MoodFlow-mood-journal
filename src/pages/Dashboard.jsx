import MoodSelector from "../components/MoodSelector";
import JournalEditor from "../components/JournalEditor";
import { calculateStreak } from "../utils/streak";
import { motion } from "framer-motion";

export default function Dashboard({
  mood,
  setMood,
  addEntry,
  entries,
}) {
  const streak = calculateStreak(entries);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="card p-4 mt-4 text-center">
        🔥 {streak} day streak
      </div>

      <div className="card p-6 mt-6">
        <MoodSelector selected={mood} setSelected={setMood} />
        <JournalEditor mood={mood} addEntry={addEntry} />
      </div>
    </motion.div>
  );
}