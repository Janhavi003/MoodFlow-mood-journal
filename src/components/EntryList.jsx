import EntryCard from "./EntryCard";

export default function EntryList({ entries, deleteEntry }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          deleteEntry={deleteEntry}
        />
      ))}
    </div>
  );
}