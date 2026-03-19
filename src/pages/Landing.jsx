import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen px-6">

      {/* HERO */}
      <section className="text-center pt-32 pb-24 relative">

        {/* Glow */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight"
        >
          Understand Your Mind.
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
          MoodJournal helps you track emotions, reflect daily, and discover patterns in your mental wellbeing.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/signup" className="button-primary px-8 py-3 text-lg">
            Get Started Free
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 border border-white/10 rounded-xl hover:bg-white/5"
          >
            Login
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 py-16">

        {[
          {
            title: "Track Your Mood",
            desc: "Log your emotions daily with a simple and intuitive interface.",
          },
          {
            title: "Gain Insights",
            desc: "Understand patterns and trends in your mental wellbeing.",
          },
          {
            title: "Build Habits",
            desc: "Stay consistent and improve your emotional awareness.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="card p-6"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="text-center py-20">

        <h2 className="text-3xl font-bold">
          Simple. Clean. Powerful.
        </h2>

        <p className="text-gray-400 mt-3">
          A distraction-free journaling experience.
        </p>

        <div className="mt-10 max-w-4xl mx-auto card p-10">
          <p className="text-gray-500">
            Beautiful interface with mood tracking, insights, and analytics —
            all in one place.
          </p>
        </div>

      </section>

      {/* WHY SECTION */}
      <section className="max-w-5xl mx-auto py-20 text-center">

        <h2 className="text-3xl font-bold">
          Why MoodJournal?
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Most people ignore their emotions. MoodJournal helps you understand them.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="card p-6">
            <p className="text-lg">🧠</p>
            <p className="mt-2 text-gray-400">
              Improve self-awareness
            </p>
          </div>

          <div className="card p-6">
            <p className="text-lg">📈</p>
            <p className="mt-2 text-gray-400">
              Track emotional trends
            </p>
          </div>

          <div className="card p-6">
            <p className="text-lg">🔥</p>
            <p className="mt-2 text-gray-400">
              Build better habits
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-20">

        <h2 className="text-3xl font-bold">
          Start your journey today
        </h2>

        <Link
          to="/signup"
          className="button-primary mt-6 inline-block px-10 py-3 text-lg"
        >
          Get Started Free
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} MoodJournal • Built with care
      </footer>

    </div>
  );
}