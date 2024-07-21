import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import main_foto from "/images/main_foto.png";
import HomeBubble from "../components/HomeBubble";
import "../styles/Home.scss";

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
        <div id="img_container">
          <motion.img
            initial={{ y: 100, filter: "blur(10px)", scale: 0.7 }}
            animate={{
              y: 0,
              transition: { duration: 0.7 },
              filter: " blur(0px)",
              scale: 1,
            }}
            exit={{
              filter: "blur(10px)",
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            src={main_foto}
            alt="David Mendoza, main photo"
            id="main_foto"
          />
          <HomeBubble
            bubbleColor={"#0093e0"}
            topBubble={"Hello"}
            bottomBubble={"I'm David"}
            styling={{
              right: isMobile ? "20%" : "-10%",
            }}
            animate={{ rotate: -20 }}
          />
          <HomeBubble
            bubbleColor={"#f8da18"}
            topBubble={"i_make"}
            bottomBubble={"web_pages"}
            link={"webs"}
            styling={{
              left: isMobile ? "15%" : "-20%",
              top: "20%",
            }}
            animate={{ rotate: 10 }}
          />
          <HomeBubble
            bubbleColor={"#e3b4db"}
            topBubble={"more"}
            bottomBubble={"about_me"}
            link={"about"}
            styling={{
              right: isMobile ? "15%" : "-10%",
              top: "35%",
            }}
            animate={{ rotate: 10 }}
          />
          <HomeBubble
            bubbleColor={"#669f63"}
            topBubble={"i_draw"}
            bottomBubble={"illustrations"}
            link={"illustrations"}
            styling={{
              left: isMobile ? "20%" : "-5%",
              bottom: "20%",
            }}
            animate={{ rotate: -10 }}
          />
        </div>
      </div>
    </>
  );
}
