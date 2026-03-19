import { motion } from "framer-motion";
import { calculateStreak } from "../utils/streak";

export default function Dashboard({ entries }) {
  const streak = calculateStreak(entries);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="card p-6 mt-6 text-center">
        🔥 {streak} day streak
      </div>

      <div className="card p-6 mt-6">
        <h2 className="font-semibold">Recent Entries</h2>

        {entries.slice(0, 3).map((e) => (
          <div key={e.id} className="mt-3">
            <p className="text-sm text-gray-400">
              {new Date(e.date).toDateString()}
            </p>
            <p>{e.text.slice(0, 80)}...</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}