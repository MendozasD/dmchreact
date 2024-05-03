import { motion } from "framer-motion";
import "../styles/Home.scss";
// import main_foto from "/images/main_foto.png";

export default function HomePage() {
  return (
    <div id="home">
      <motion.div
        initial={{ scale: 0.5, y: 500 }}
        animate={{ scale: 1.2, y: 0, transition: { duration: 0.7 } }}
        exit={{ scale: 0.5, y: 500, transition: { duration: 0.4 } }}
        id="bubble_home"
      ></motion.div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        width="600"
        height="750"
        id="main_foto"
        initial={{ y: 100 }}
        animate={{
          y: 0,
          transition: { duration: 0.7 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        <defs>
          <filter id="filter">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <mask id="mask">
            <ellipse
              cx="50%"
              cy="50%"
              rx="50%"
              ry="50%"
              fill="white"
              filter="url(#filter)"
            ></ellipse>
          </mask>
        </defs>

        <image
          xlinkHref="./images/main_foto.png"
          width="600"
          height="750"
          mask="url(#mask)"
        ></image>
      </motion.svg>
      {/* <motion.img
        initial={{ y: 100 }}
        animate={{
          y: 0,
          transition: { duration: 0.7 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        src={main_foto}
        alt="David Mendoza, main photo"
        id="main_foto"
      /> */}
      <motion.div
        id="description_home"
        initial={{ opacity: 0.2, y: 500 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <motion.p>Freelancer</motion.p>
        <motion.p>Web Designer</motion.p>
      </motion.div>
    </div>
  );
}
