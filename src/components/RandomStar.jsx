import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import star1 from "/stars/star1.svg";
import star2 from "/stars/star2.svg";
import star3 from "/stars/star3.svg";

function getRandomPosition() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const randomTop = Math.floor(Math.random() * viewportHeight);
  const randomLeft = Math.floor(Math.random() * viewportWidth);

  return { top: randomTop, left: randomLeft };
}

// eslint-disable-next-line react/prop-types
function RandomPositionComponent({ numStars = 10 }) {
  const [positions, setPositions] = useState(
    Array.from({ length: numStars }, () => getRandomPosition())
  );

  useEffect(() => {
    const handleResize = () => {
      setPositions(Array.from({ length: numStars }, () => getRandomPosition()));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numStars]);

  const stars = [star1, star2, star3];

  return (
    <>
      {positions.map((position, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: -1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={stars[index % stars.length]}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.7,
              scale: 0.3,
            }}
            transition={{ delay: index * 0.5 }} // Add delay based on index
            style={{ position: "absolute" }}
          />
        </motion.div>
      ))}
    </>
  );
}

export default RandomPositionComponent;
