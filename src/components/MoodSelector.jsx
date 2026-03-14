import { moods } from "../utils/moodUtils";

export default function MoodSelector({ selected, setSelected }) {
  return (
    <div className="flex gap-4 justify-center mt-4">
      {moods.map((mood) => (
        <button
          key={mood.label}
          onClick={() => setSelected(mood.label)}
          className={`p-4 rounded-xl shadow transition transform hover:scale-110
          ${selected === mood.label ? mood.color + " text-white" : "bg-white dark:bg-gray-800"}`}
        >
          <span className="text-2xl">{mood.emoji}</span>
          <p className="text-sm">{mood.label}</p>
        </button>
      ))}
    </div>
  );
}