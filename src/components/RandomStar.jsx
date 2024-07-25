import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getRandomPosition() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const randomTop = Math.floor(Math.random() * viewportHeight);
  const randomLeft = Math.floor(Math.random() * viewportWidth);

  return { top: randomTop, left: randomLeft };
}

function RandomPositionComponent({ children }) {
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const handleResize = () => {
      setPosition(getRandomPosition());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default RandomPositionComponent;
