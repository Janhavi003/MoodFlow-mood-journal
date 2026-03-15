export default function CalendarHeatmap({ entries }) {
  const map = {};

  entries.forEach((e) => {
    const day = e.date.split("T")[0];
    map[day] = e.mood;
  });

  const days = Object.keys(map);

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <div
          key={day}
          className="w-8 h-8 bg-green-400 rounded"
          title={day}
        />
      ))}
    </div>
  );
}