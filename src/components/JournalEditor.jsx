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
    <div className="card p-6 mt-6">
      <textarea
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input h-40 resize-none"
      />

      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>{text.length} characters</span>
      </div>

      <input
        placeholder="tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="input mt-4"
      />

      <button onClick={saveEntry} className="button-primary mt-4">
        Save Entry
      </button>
    </div>
  );
}