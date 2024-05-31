/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "../styles/MainContent.scss";

function MainContent({ title, children }) {
  return (
    <>
      <div className="main_content">
        <motion.h1
          initial={{ y: -100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="main_content_title"
        >
          {title}
        </motion.h1>
        <section className="content">{children}</section>
      </div>
    </>
  );
}
export default MainContent;
