import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AmbientGlow = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 200,
        y: mouse.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.5
      }}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(234,179,8,0.25) 0%, transparent 70%)",
        filter: "blur(80px)"
      }}
    />
  );
};

export default AmbientGlow;