import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Experience = () => {

  const containerRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image cinematic zoom
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // Image brightness changes
  const brightnessValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.6, 1]
  );  
const filter = useTransform(
  brightnessValue,
  (b) => `brightness(${b})`
);
  // Text reveal timings
const opacity1 = useTransform(
  scrollYProgress,
  [0, 0.15, 0.20],
  [1, 1, 0]
);

const opacity2 = useTransform(
  scrollYProgress,
  [0.21, 0.35, 0.4],
  [0, 1, 0]
);

const opacity3 = useTransform(
  scrollYProgress,
  [0.41, 0.55, 0.65],
  [0, 1, 0]
);

const opacity4 = useTransform(
  scrollYProgress,
  [0.66, 0.75, 0.9],
  [0, 1, 1]
);

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (

    <section
      ref={containerRef}
      className="relative min-h-[400vh] bg-black"
    >

      {/* Sticky Image Container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background image */}
        <motion.img
          src="/Intro.png"
          alt="Restaurant Experience"
          style={{
            scale,
            filter
          }}
          className="absolute w-full h-full object-cover"
        />

        {/* Dark overlay for luxury feel */}
        <div className="absolute inset-0 bg-black/40"></div>


        {/* Text Layer 1 */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
        >

          <p className="tracking-[0.5em] text-yellow-500 mb-6">
            EXPERIENCE
          </p>

          <h2 className="text-6xl md:text-8xl font-bold text-center">
            Not Just Dining
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            A moment in time
          </p>

        </motion.div>


        {/* Text Layer 2 */}
        <motion.div
          style={{
            opacity: opacity2,
            y: yText
          }}
          className="absolute inset-0 flex items-center justify-center text-center text-white px-6"
        >

          <h2 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">

            Every light.  
            Every texture.  
            Every detail.

          </h2>

        </motion.div>


        {/* Text Layer 3 */}
        <motion.div
          style={{ opacity: opacity3, y:yText }}
          className="absolute inset-0 flex items-center justify-center text-center text-white px-6"
        >

          <h2 className="text-5xl md:text-7xl font-bold">

            Luxury is not seen  
            <br />
            <span className="text-yellow-500">
              It is felt
            </span>

          </h2>

        </motion.div>


        {/* Text Layer 4 */}
        <motion.div
          style={{ opacity: opacity4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >

          <h2 className="text-6xl md:text-8xl font-bold mb-6">

            INDIAN  
            <span className="text-yellow-500"> CUISINE</span>

          </h2>

          <p className="text-xl text-gray-300">
            Where dining becomes memory
          </p>

        </motion.div>

      </div>

    </section>

  );
};

export default Experience;