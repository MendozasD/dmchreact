import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
function Logo() {
  const [bubble, setBubble] = useState(false);
  function bubbleAnimation() {
    setBubble(true);
    console.log(bubble);
  }

  const firstName = "david";
  const lastName = "mendoza";
  return (
    <>
      <motion.div whileHover={bubbleAnimation} id="logo">
        <Link to="/">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
        </Link>
      </motion.div>
    </>
  );
}

export default Logo;
