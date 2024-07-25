/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles/MainContent.scss";

function MainContent({ title, children }) {
  let currentLocation = useLocation().pathname;
  let location = currentLocation.slice(1);
  return (
    <>
      <div className="main_content">
        <motion.h1
          initial={{ y: -100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="main_content_title"
        >
          <Link to={"/"} className="back_arrow">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          {title}
        </motion.h1>
        <section id={location + "content"}>{children}</section>
      </div>
      <Navigation></Navigation>
    </>
  );
}
export default MainContent;
