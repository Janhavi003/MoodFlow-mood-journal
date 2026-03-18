import dayjs from "dayjs";

export default function CalendarHeatmap({ entries }) {
  const data = {};

  entries.forEach((e) => {
    const date = dayjs(e.date).format("YYYY-MM-DD");
    data[date] = e.mood;
  });

  const days = Array.from({ length: 90 }).map((_, i) =>
    dayjs().subtract(i, "day")
  );

  const moodColors = {
    Happy: "bg-yellow-400",
    Good: "bg-green-400",
    Neutral: "bg-gray-400",
    Sad: "bg-blue-400",
    Angry: "bg-red-400",
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      {days.map((day, i) => {
        const key = day.format("YYYY-MM-DD");
        const mood = data[key];

        return (
          <div
            key={i}
            title={key}
            className={`w-4 h-4 rounded ${
              mood ? moodColors[mood] : "bg-gray-200 dark:bg-gray-800"
            }`}
          />
        );
      })}
    </div>
  );
}