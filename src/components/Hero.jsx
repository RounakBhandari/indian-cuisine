import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden" id="#home">

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="/hero.png"    
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mb-12 text-center">
        {/* Logo */}
        <motion.img
          src="/tajmahal.png"
          alt="Indian Cuisine Logo"
          className="w-64 md:w-40 mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 2.2 }}
          transition={{ duration: 1.5 }}
        />
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-white text-5xl md:text-7xl font-bold tracking-widest"
        >
          INDIAN CUISINE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.6 }}
          className="text-yellow-500 mt-4 text-lg md:text-2xl tracking-wide"
        >
          Indische & Nepalische Fusionsküche
        </motion.p>

        {/* Button */}
        <Link to="/menu">
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(234,179,8,0.7)"
          }}
          className="mt-8 px-8 py-3 border border-yellow-500 text-yellow-500 font-semibold tracking-widest hover:bg-yellow-500 hover:text-black transition duration-300"
        >
          EXPLORE MENU
        </motion.button>
        </Link>    
      </div>

    </section>
  );
};

export default Hero;