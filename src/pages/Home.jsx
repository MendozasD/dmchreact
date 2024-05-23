import { motion } from "framer-motion";
import "../styles/Home.scss";
import main_foto from "/images/main_foto.png";

export default function HomePage() {
  return (
    <>
      <div id="home">
        <motion.div
          id="background_blue"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          layout
          // exit={{
          //   opacity: 0.5,
          //   borderRadius: 500,
          //   transition: { duration: 1 },
          // }}
        ></motion.div>
        <motion.div
          id="img_container"
          initial={{ y: 100 }}
          animate={{
            y: 0,
            transition: { duration: 0.7 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
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
            <p>Freelancer / Web Designer / Illustrations</p>
          </motion.div>
          <img src={main_foto} alt="David Mendoza, main photo" id="main_foto" />
        </motion.div>
      </div>
    </>
  );
}
