import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { moods } from "../utils/moodUtils";

export default function MoodChart({ entries }) {
  const data = moods.map((m) => ({
    name: m.label,
    value: entries.filter((e) => e.mood === m.label).length,
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        {data.map((entry, index) => (
          <Cell key={index} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}