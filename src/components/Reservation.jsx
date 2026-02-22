import { useState } from "react";
import { motion } from "framer-motion";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData); // For now, just log
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
  };

  return (
    <section
      id="reservation"
      className="relative w-full py-48 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for ambient glow */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16"
      >
        {/* Left side text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-yellow-500 tracking-[0.3em] uppercase mb-4">
            Reserve Your Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Table Awaits You
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            The taste you remember begins with a moment you reserve. Choose your
            date, time, and guests, and we’ll prepare an unforgettable dining experience.
          </p>
        </div>

        {/* Right side glass form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col gap-6 border border-yellow-500/30 shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-transparent border border-yellow-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
          />

          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="20"
            placeholder="Number of Guests"
            required
            className="bg-transparent border border-yellow-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="bg-transparent border border-yellow-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="bg-transparent border border-yellow-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
          />

          <button
            type="submit"
            className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl py-3 text-lg shadow-lg transition-transform hover:scale-105"
          >
            Reserve Now
          </button>

          {/* Success message */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-green-400 font-semibold text-center mt-2"
            >
              Your table is reserved! ✨
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Reservation;