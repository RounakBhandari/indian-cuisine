import { useRef, useState, useEffect } from "react";
import { useAnimationFrame, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const dishes = [
  { title: "Butter Chicken", image: "/dish1.png", desc: "Rich creamy tomato curry." },
  { title: "Momo", image: "/dish2.jpg", desc: "Authentic Nepali dumplings." },
  { title: "Paneer Tikka", image: "/dish3.png", desc: "Grilled cottage cheese." },
  { title: "Biryani", image: "/dish1.png", desc: "Fragrant royal rice dish." },
  { title: "Chowmein", image: "/dish1.png", desc: "Classic Indo-Chinese noodles." },
  { title: "Dal Makhani", image: "/dish1.png", desc: "Creamy black lentils." },
  { title: "Samosa", image: "/dish1.png", desc: "Crispy golden pastry." },
  { title: "Sekuwa", image: "/dish1.png", desc: "Traditional Nepali BBQ." },
  { title: "Naan", image: "/dish1.png", desc: "Soft tandoori bread." },
];

const infiniteDishes = [...dishes, ...dishes];

const Signature = () => {

  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const position = useRef(0);

  const baseSpeed = 1;
  const speed = useRef(baseSpeed);

  const [hovered, setHovered] = useState(false);
  const [centerIndex, setCenterIndex] = useState(0);

  // Infinite scroll + slowdown
  useAnimationFrame(() => {

    if (!trackRef.current || !containerRef.current) return;

    speed.current += ((hovered ? 0.2 : baseSpeed) - speed.current) * 0.03;

    position.current -= speed.current;

    const width = trackRef.current.scrollWidth / 2;

    if (Math.abs(position.current) >= width) {
      position.current = 0;
    }

    trackRef.current.style.transform =
      `translateX(${position.current}px)`;

    updateCenterSpotlight();

  });

  // Detect center card
  const updateCenterSpotlight = () => {

    const container = containerRef.current;
    const cards = trackRef.current.children;

    const containerCenter =
      container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(cards).forEach((card, index) => {

      const rect = card.getBoundingClientRect();
      const cardCenter =
        rect.left + rect.width / 2 -
        container.getBoundingClientRect().left;

      const distance =
        Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {

        closestDistance = distance;
        closestIndex = index;

      }

    });

    setCenterIndex(closestIndex);

  };

  return (
    <section className="relative bg-black text-white py-40 pb-3 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-24">
        <p className="text-yellow-500 tracking-[0.5em] uppercase mb-4">
          Experience Luxury
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Signature Creations
        </h2>
      </div>


      {/* Container */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto overflow-hidden px-6 py-5 pb-12 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-12 w-max items-center"
        >

          {infiniteDishes.map((dish, index) => {

            const isCenter = index === centerIndex;

            return (

              <Tilt
                key={index}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.02}
                transitionSpeed={1500}
                className="group"
              >

                <motion.div
                  animate={{
                    scale: isCenter ? 1.05 : 0.85,
                    opacity: isCenter ? 1 : 0.5
                  }}
                  transition={{
                    duration: 0.5
                  }}
                  className="relative w-[320px]"
                >

                  <div className="
                    relative overflow-hidden rounded-2xl
                    border border-transparent
                    group-hover:border-yellow-500
                    transition duration-500
                    shadow-xl
                    group-hover:shadow-yellow-500/20
                  ">

                    <img
                      src={dish.image}
                      className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/>

                    <div className="absolute bottom-0 p-8">

                      <h3 className="text-3xl font-bold mb-2">
                        {dish.title}
                      </h3>

                      <p className="
                        text-gray-300
                        opacity-0
                        group-hover:opacity-100
                        transition duration-500
                      ">
                        {dish.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>

              </Tilt>

            );

          })}

        </div>

      </div>


      {/* Spotlight glow */}
      <div className="
        pointer-events-none absolute inset-0 flex justify-center top-72
      ">
        <div className="
          w-[500px]
          h-[300px]
          bg-gradient-to-r
          from-transparent
          via-yellow-500/20
          to-transparent
          blur-3xl
        "/>
      </div>

    </section>
  );

};

export default Signature;