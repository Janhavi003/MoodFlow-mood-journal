export function getMoodPrediction(entries) {
  if (entries.length < 3) {
    return "Not enough data to predict your mood yet.";
  }

  const moodScore = {
    Happy: 5,
    Good: 4,
    Neutral: 3,
    Sad: 2,
    Angry: 1,
  };

  const recent = entries.slice(0, 3);

  const avg =
    recent.reduce((sum, e) => sum + moodScore[e.mood], 0) /
    recent.length;

  if (avg >= 4.5) return "You're likely to feel Happy tomorrow 😄";
  if (avg >= 3.5) return "You're trending positive 🙂";
  if (avg >= 2.5) return "Your mood is stable 😐";
  if (avg >= 1.5) return "You may feel low tomorrow 😔";

  return "Take care — your mood trend is low 😡";
}