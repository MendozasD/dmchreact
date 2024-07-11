import { motion } from "framer-motion";
import "../styles/Home.scss";
import main_foto from "/images/main_foto.png";
import HomeBubble from "../components/HomeBubble";

export default function HomePage() {
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
            bubbleColor={"#0093e0"}
            topBubble={"Hello"}
            bottomBubble={"I'm David"}
            styling={{ right: "10%", transform: "rotate(-10grad)" }}
          />
          <HomeBubble
            bubbleColor={"#f8da18"}
            topBubble={"i_make"}
            bottomBubble={"web_pages"}
            link={"webs"}
            styling={{
              left: "0%",
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
              right: "5%",
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
              left: "5%",
              bottom: "20%",
              transform: "rotate(-20grad)",
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
