export function generateInsights(entries) {
  if (!entries.length) return ["Start journaling to see insights."];

  const moodCount = {};

  entries.forEach((e) => {
    moodCount[e.mood] = (moodCount[e.mood] || 0) + 1;
  });

  const mostCommon = Object.entries(moodCount).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  const insights = [`Your most common mood is ${mostCommon}`];

  if (entries.length >= 5) {
    insights.push("You're building a strong journaling habit 🔥");
  } else {
    insights.push("Try journaling daily to unlock better insights");
  }

  return insights;
}
