/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import colors from "../styles/_colors.module.scss";

function Website({ webName, projectLink, children }) {
  const [isVisible, setIsVisible] = useState(false);

  function showMedia() {
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
      transition={{ duration: 0.9 }}
      id={projectName + "_project"}
      className="web_button_shower"
      onClick={showMedia}
    >
      <h1 className="web_name">{webName}</h1>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              exit={{ opacity: 0, y: 100, transition: { duration: 0.2 } }}
              className="web_projects_media"
            >
              {children}
            </motion.div>
            <motion.a
              href={projectLink}
              target="_blank"
              initial={{ fontSize: "1rem" }}
              animate={{ fontSize: "3rem" }}
            >
              {webName}
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Website;
