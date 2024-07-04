import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Home.scss";
import main_foto from "/images/main_foto.png";
import HomeBubble from "../components/HomeBubble";

export default function HomePage() {
  useEffect(() => {
    console.log("Hello");
  });

  return (
    <>
      <div id="home">
        <motion.div
          id="background_container"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          layout
        >
          <div id="bg_bubble_bottom" className="bg_buble"></div>
          <div id="bg_bubble_top" className="bg_buble"></div>
        </motion.div>
        <motion.div
          id="img_container"
          initial={{ y: 100 }}
          animate={{
            y: 0,
            transition: { duration: 0.7 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <img src={main_foto} alt="David Mendoza, main photo" id="main_foto" />
          <HomeBubble
            topBubble={"Hello"}
            bottomBubble={"I'm David"}
            right={"10%"}
            zIndex={2}
          />
        </motion.div>
      </div>
    </>
  );
}
