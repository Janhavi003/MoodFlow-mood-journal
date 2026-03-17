import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-black text-gray-900 dark:text-white">

      {/* HERO */}
      <section className="text-center px-6 pt-24 pb-20 relative overflow-hidden">

        {/* Glow background */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Track Your Mood.
          <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Understand Yourself.
          </span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto">
          A modern journaling experience to track emotions, reflect daily,
          and discover meaningful insights about yourself.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/journal"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition"
          >
            Start Journaling →
          </Link>

          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View Dashboard
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Track Your Mood",
            desc: "Log how you feel every day with intuitive emoji-based tracking.",
          },
          {
            title: "Write & Reflect",
            desc: "Capture your thoughts with a clean and distraction-free editor.",
          },
          {
            title: "Visual Insights",
            desc: "Understand patterns with powerful analytics and charts.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="backdrop-blur bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* PREVIEW SECTION */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Simple. Clean. Powerful.
        </h2>

        <p className="text-gray-500 mt-3">
          Designed for clarity and focus.
        </p>

        <div className="mt-10 max-w-4xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-10">
          <p className="text-gray-500">
            Beautiful journaling interface with mood tracking, analytics,
            and a distraction-free experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Start your self-reflection journey today
        </h2>

        <Link
          to="/journal"
          className="mt-6 inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition"
        >
          Get Started Free
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} MoodJournal — Built for self-growth
      </footer>
    </div>
  );
}