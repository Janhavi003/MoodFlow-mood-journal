import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MoodChart({ entries }) {
  const moodMap = {
    Happy: 5,
    Good: 4,
    Neutral: 3,
    Sad: 2,
    Angry: 1,
  };

  const data = entries.map((e) => ({
    date: new Date(e.date).toLocaleDateString(),
    mood: moodMap[e.mood],
  }));

  if (!data.length) {
    return (
      <p className="text-gray-500 text-center">
        No data yet — start journaling 📓
      </p>
    );
  }

  return (
    <div className="h-72">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis domain={[1, 5]} stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}