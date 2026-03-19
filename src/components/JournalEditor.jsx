import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function JournalEditor({ mood, addEntry }) {
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const save = () => {
    if (!text) return;

    addEntry({
      id: uuid(),
      date: new Date().toISOString(),
      mood,
      text,
      tags: tags.split(",").map((t) => t.trim()),
    });

    setText("");
    setTags("");
  };

  return (
    <div className="mt-6">
      <textarea
        className="input h-40 resize-none"
        placeholder="Start writing your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-between mt-2 text-sm text-gray-400">
        {text.length} characters
      </div>

      <input
        className="input mt-3"
        placeholder="tags..."
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button onClick={save} className="button-primary mt-4">
        Save Entry
      </button>
    </div>
  );
}