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

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" hide />
          <YAxis domain={[1, 5]} hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#6366f1"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}