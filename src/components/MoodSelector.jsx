import { moods } from "../utils/moodUtils";

export default function MoodSelector({ selected, setSelected }) {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {moods.map((mood) => (
        <button
          key={mood.label}
          onClick={() => setSelected(mood.label)}
          className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition shadow-sm hover:scale-105
          ${
            selected === mood.label
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
              : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          }`}
        >
          <span className="text-2xl">{mood.emoji}</span>
          <span className="text-xs mt-1">{mood.label}</span>
        </button>
      ))}
    </div>
  );
}