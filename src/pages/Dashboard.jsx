import MoodChart from "../components/MoodChart";
import CalendarHeatmap from "../components/CalendarHeatmap";
import { generateInsights } from "../utils/insights";
import { motion } from "framer-motion";

export default function Analytics({ entries }) {
  const insights = generateInsights(entries);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Analytics</h1>

      {entries.length === 0 ? (
        <div className="card mt-10 p-10 text-center">
          No data yet.
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="card p-6">
              <h2 className="mb-4 font-semibold">Mood Trend</h2>
              <MoodChart entries={entries} />
            </div>

            <div className="card p-6">
              <h2 className="mb-4 font-semibold">Activity</h2>
              <CalendarHeatmap entries={entries} />
            </div>
          </div>

          <div className="card p-6 mt-6">
            <h2 className="font-semibold mb-3">Insights</h2>
            {insights.map((i, idx) => (
              <p key={idx} className="text-gray-500">
                • {i}
              </p>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}