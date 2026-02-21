import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const handleTranslate = (langCode) => {
    // Google creates a select dropdown with this class
    const googleCombo = document.querySelector(".goog-te-combo");
    
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
      setCurrentLang(langCode === "en" ? "EN" : "AT");
    } else {
      console.error("Google Translate script hasn't loaded yet.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Menu", "Gallery", "About", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 py-4 shadow-lg" : "bg-transparent py-8"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-10 flex items-center transition-all duration-500 ${
          scrolled ? "justify-between" : "justify-center"
        }`}
      >
        {/* Logo Section */}
        <AnimatePresence>
          {scrolled && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-2"
            >
              <img src="/tajmahal.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div className="text-white text-xl font-bold tracking-widest">
                INDIAN <span className="text-yellow-500">CUISINE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links & Language Toggle Container */}
        <div className="flex items-center gap-12">
          <motion.div layout className="flex gap-10 text-white font-medium items-center">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors">
                {item}
              </a>
            ))}
          </motion.div>

          {/* Toggle Button */}
          <button 
            onClick={() => handleTranslate(currentLang === "EN" ? "de" : "en")} 
            className="px-3 py-1 border border-yellow-500 text-yellow-500 text-xs rounded hover:bg-yellow-500 hover:text-black transition-all font-bold"
          >
            {currentLang === "EN" ? "AT" : "EN"}
          </button>
        </div>
      </div>

      {/* Required hidden element for Google */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </motion.nav>
  );
};

export default Navbar;