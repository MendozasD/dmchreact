import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Home.scss";
import main_foto from "/images/main_foto.png";
import HomeBubble from "../components/HomeBubble";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <>
      <div id="home">
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
            bubbleColor={"#0093e0"}
            topBubble={"Hello"}
            bottomBubble={"I'm David"}
            styling={{
              right: isMobile ? "20%" : "-10%",
              transform: "rotate(-10grad)",
            }}
          />
          <HomeBubble
            bubbleColor={"#f8da18"}
            topBubble={"i_make"}
            bottomBubble={"web_pages"}
            link={"webs"}
            styling={{
              left: isMobile ? "15%" : "-20%",
              top: "20%",
              transform: "rotate(10grad)",
            }}
          />
          <HomeBubble
            bubbleColor={"#e3b4db"}
            topBubble={"more"}
            bottomBubble={"about_me"}
            link={"about"}
            styling={{
              right: isMobile ? "15%" : "-10%",
              top: "35%",
              transform: "rotate(10grad)",
            }}
          />
          <HomeBubble
            bubbleColor={"#669f63"}
            topBubble={"i_draw"}
            bottomBubble={"illustrations"}
            link={"illustrations"}
            styling={{
              left: isMobile ? "20%" : "-5%",
              bottom: "20%",
              transform: "rotate(-20grad)",
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
