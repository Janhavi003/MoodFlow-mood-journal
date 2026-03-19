import { motion } from "framer-motion";
import { moods } from "../utils/moodUtils";

export default function MoodSelector({ selected, setSelected }) {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {moods.map((mood) => (
        <motion.button
          key={mood.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelected(mood.label)}
          className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center
          ${
            selected === mood.label
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl"
              : "bg-white dark:bg-gray-900 border border-gray-700"
          }`}
        >
          <span className="text-2xl">{mood.emoji}</span>
          <span className="text-xs">{mood.label}</span>
        </motion.button>
      ))}
    </div>
  );
}