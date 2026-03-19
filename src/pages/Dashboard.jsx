import { calculateStreak } from "../utils/streak";
import { generateInsights } from "../utils/insights";
import { getMoodPrediction } from "../utils/predictions";
import CalendarHeatmap from "../components/CalendarHeatmap";
import { motion } from "framer-motion";

export default function Dashboard({ entries }) {
  const streak = calculateStreak(entries);
  const insights = generateInsights(entries);
  const prediction = getMoodPrediction(entries);

  const recentEntries = entries.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Streak */}
      <div className="card p-4 mt-6 text-center">
        🔥 {streak} day streak
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* Heatmap */}
        <div className="card p-6">
          <h2 className="font-semibold mb-4">Activity</h2>
          <CalendarHeatmap entries={entries} />
        </div>

        {/* Prediction */}
        <div className="card p-6">
          <h2 className="font-semibold mb-2">Prediction</h2>
          <p className="text-indigo-400">{prediction}</p>
        </div>

      </div>

      {/* Insights */}
      <div className="card p-6 mt-6">
        <h2 className="font-semibold mb-3">Insights</h2>
        {insights.map((i, idx) => (
          <p key={idx} className="text-gray-400">
            • {i}
          </p>
        ))}
      </div>

      {/* Recent Entries */}
      <div className="card p-6 mt-6">
        <h2 className="font-semibold mb-3">Recent Entries</h2>

        {recentEntries.length === 0 ? (
          <p className="text-gray-500">
            No entries yet.
          </p>
        ) : (
          recentEntries.map((e) => (
            <div key={e.id} className="mb-3">
              <p className="text-sm text-gray-400">
                {new Date(e.date).toDateString()}
              </p>
              <p>{e.text.slice(0, 80)}...</p>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}