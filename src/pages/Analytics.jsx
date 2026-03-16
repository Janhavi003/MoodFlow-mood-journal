export default function Analytics({ entries }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>

      <p className="text-gray-500 dark:text-gray-400 mb-6">
        View insights about your mood trends.
      </p>

      {entries.length === 0 ? (
        <p className="text-gray-500">No data available yet.</p>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <p>Total journal entries: {entries.length}</p>
        </div>
      )}
    </div>
  );
}