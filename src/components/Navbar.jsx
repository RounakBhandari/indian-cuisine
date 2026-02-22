import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 300);
  });


  const navLinks = ["Home", "Menu", "Gallery", "About", "Contact"];

  return (
    <motion.nav
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1, delay: 1 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/30  py-6 shadow-lg" 
          : "bg-transparent py-8"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto px-10 flex items-center transition-all duration-500 ${
          scrolled ? "justify-between" : "justify-center"
        }`}
      >
        
        {/* Logo - Only shows when scrolled */}
        <AnimatePresence>
          {scrolled && (
            <div className="flex justify-between gap-1">        
            <motion.img
                src="/tajmahal.png"
                alt="Indian Cuisine Logo"
                className="w-16 object-contain -mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 3}}
              className="text-white text-2xl mt-2 font-bold tracking-widest"
            >
              INDIAN <span className="text-yellow-500">CUISINE</span>
            </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Links - They move smoothly due to the "layout" prop */}
        <motion.div 
          layout
          transition={{ type: "spring", stiffness: 100, damping: 40 }}
          className="flex gap-16 text-white font-medium items-center"
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group cursor-pointer text-lg uppercase tracking-widest"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>    
          ))}
        </motion.div>

        {/* Spacer for Desktop Scrolled state to keep links centered-ish if desired */}
        {/* If you want links all the way to the right, we leave this as is. */}
      </div>
    </motion.nav>
  );
};

export default Navbar;