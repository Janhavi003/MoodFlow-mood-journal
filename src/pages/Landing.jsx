import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">MoodJournal</h1>

        <div className="flex gap-4">
          <Link to="/journal" className="text-sm hover:underline">
            Journal
          </Link>
          <Link
            to="/journal"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold leading-tight"
        >
          Track Your Mood.
          <br />
          Understand Yourself.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 max-w-xl mx-auto"
        >
          MoodJournal helps you reflect daily, track emotional patterns,
          and build better mental clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/journal"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-indigo-700"
          >
            Start Journaling →
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mt-24 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Track Your Mood",
            desc: "Log how you feel every day with simple emojis.",
          },
          {
            title: "Write & Reflect",
            desc: "Capture your thoughts with a clean writing experience.",
          },
          {
            title: "Visual Insights",
            desc: "Understand patterns with charts and analytics.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
          >
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* App Preview */}
      <section className="mt-24 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Simple. Clean. Powerful.
        </h2>

        <div className="mt-10 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-10 max-w-4xl mx-auto">
          <p className="text-gray-500">
            Beautiful journaling interface with mood tracking and insights.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center pb-20 px-6">
        <h2 className="text-3xl font-bold">
          Start your self-reflection journey today
        </h2>

        <Link
          to="/journal"
          className="mt-6 inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-indigo-700"
        >
          Get Started Free
        </Link>
      </section>
    </div>
  );
}