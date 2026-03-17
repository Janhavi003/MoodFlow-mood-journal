export function calculateStreak(entries) {
  if (!entries.length) return 0;

  const dates = entries
    .map((e) => new Date(e.date).toDateString())
    .sort((a, b) => new Date(b) - new Date(a));

  let streak = 0;
  let current = new Date();

  for (let i = 0; i < dates.length; i++) {
    const entryDate = new Date(dates[i]);

    if (entryDate.toDateString() === current.toDateString()) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}