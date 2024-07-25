import MainContent from "../components/MainContent";
import { motion } from "framer-motion";
import star1 from "/stars/star1.png";
import star2 from "/stars/star2.png";
import star3 from "/stars/star3.png";

function About() {
  const stars = [star1, star2, star3];
  return (
    <MainContent title="About">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {stars.map((star, index) => (
          <motion.img
            src={star}
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 0.3,
            }}
            transition={{ delay: index * 0.5 }} // Add delay based on index
            style={{ position: "absolute" }}
          />
        ))}
      </div>
    </MainContent>
  );
}
export default About;
