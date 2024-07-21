/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomeBubble({
  topBubble,
  bottomBubble,
  styling,
  bubbleColor,
  link,
  animate,
  initial,
}) {
  return (
    <>
      <motion.div
        className="home_bubble"
        style={{ ...styling }}
        initial={{ ...initial, scale: 0.5, opacity: 0 }}
        animate={{ ...animate, scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        exit={{ scale: 0, opacity: 0, rotate: 0, y: 500 }}
      >
        <Link to={`/${link}`}>
          <p style={{ backgroundColor: bubbleColor }}>{topBubble}</p>
          <p style={{ backgroundColor: bubbleColor }}>{bottomBubble}</p>
        </Link>
      </motion.div>
    </>
  );
}
export default HomeBubble;
