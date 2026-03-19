import { motion } from "framer-motion";
import MoodChart from "../components/MoodChart";

export default function Analytics({ entries }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Analytics</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* Chart */}
        <div className="card p-6">
          <h2 className="mb-4 text-lg font-semibold">
            Mood Trend
          </h2>
          <MoodChart entries={entries} />
        </div>

        {/* Summary */}
        <div className="card p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-3">
            Overview
          </h2>

          <p className="text-gray-400">
            Track how your mood changes over time.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Total Entries: {entries.length}
          </p>
        </div>

      </div>
    </motion.div>
  );
}