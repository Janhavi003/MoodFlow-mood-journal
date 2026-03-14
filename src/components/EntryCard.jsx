import { useState } from "react";
import { motion } from "framer-motion";

export default function EntryCard({ entry, deleteEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between">
        <div>
          <span className="text-xl">{entry.mood}</span>
          <span className="ml-2 text-gray-500">
            {new Date(entry.date).toDateString()}
          </span>
        </div>

        <button onClick={() => deleteEntry(entry.id)}>Delete</button>
      </div>

      <p className="mt-2">
        {open ? entry.text : entry.text.substring(0, 100) + "..."}
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="text-indigo-500 mt-2"
      >
        {open ? "Show less" : "Read more"}
      </button>

      <div className="flex gap-2 mt-3">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}