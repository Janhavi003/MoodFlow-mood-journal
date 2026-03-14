import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function JournalEditor({ mood, addEntry }) {
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const saveEntry = () => {
    if (!text) return;

    const entry = {
      id: uuid(),
      date: new Date().toISOString(),
      mood,
      text,
      tags: tags.split(",").map((t) => t.trim()),
    };

    addEntry(entry);
    setText("");
    setTags("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6 mt-6">
      <textarea
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 border rounded-lg h-40"
      />

      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>{text.length} characters</span>
      </div>

      <input
        placeholder="tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="mt-4 w-full p-2 border rounded"
      />

      <button
        onClick={saveEntry}
        className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
      >
        Save Entry
      </button>
    </div>
  );
}