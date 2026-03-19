import { motion } from "framer-motion";
import MoodSelector from "../components/MoodSelector";
import JournalEditor from "../components/JournalEditor";

export default function Journal({ mood, setMood, addEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 py-10"
    >
      <h1 className="text-3xl font-bold">Journal</h1>

      <div className="card p-6 mt-6">
        <MoodSelector selected={mood} setSelected={setMood} />
        <JournalEditor mood={mood} addEntry={addEntry} />
      </div>
    </motion.div>
  );
}