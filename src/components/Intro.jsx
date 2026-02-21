import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* Background giant text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[200px] font-bold text-white/5 tracking-widest">
          INDIAN
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >

          {/* Gold accent line */}
          <div className="w-16 h-[2px] bg-yellow-500 mb-6"></div>

          <p className="text-yellow-500 tracking-[0.4em] mb-4 uppercase text-sm">
            Authentic Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Where Tradition
            <br />
            Meets Luxury
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            Step into Indian Cuisine and discover a world where authentic Indian
            and Nepali flavors meet elegant fine dining. Every dish tells a story
            of heritage, passion, and unforgettable taste.
          </p>

          <button className="group border border-yellow-500 px-8 py-3 relative overflow-hidden">

            <span className="relative z-10 group-hover:text-black transition duration-300">
              Explore Our Story
            </span>

            <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition duration-300"></div>

          </button>

        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 , delay: 0.2}}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Gold border frame */}
          <div className="absolute -inset-4 border border-yellow-500/30 rounded-lg "></div>

          <div className="overflow-hidden rounded-lg relative z-10">

            <img
              src="/Intro.png"
              alt="Signature Dish"
              className="h-[450px] md:h-[450px] lg:h-[550px] w-full object-contain transition duration-700 hover:scale-110"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Intro;