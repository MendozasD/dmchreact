/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import colors from "../styles/_colors.module.scss";

function Website({ webName, comment }) {
  const [isVisible, setIsVisible] = useState(false);

  function showComment() {
    setIsVisible(!isVisible);
  }

  let x = webName.replace(" ", "_");
  let projectName = x.toLowerCase();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0.2 }}
      animate={{ y: 0, opacity: 1, width: isVisible ? "auto" : "fit-content" }}
      whileHover={{ scale: 1.02, backgroundColor: colors.yellow }}
      exit={{ y: 100, opacity: 0.2 }}
      transition={{ duration: 0.5 }}
      id={projectName + "_project"}
      className="web_button_shower"
      onClick={showComment}
    >
      <h1 className="web_name">{webName}</h1>
      <AnimatePresence>
        {isVisible && (
          <motion.p
            className="web_comment"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {comment}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Website;
