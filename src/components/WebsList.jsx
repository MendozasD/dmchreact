/* eslint-disable react/prop-types */
import "../styles/Webs.scss";
import { motion } from "framer-motion";

function Website({ webName, title, comment, img }) {
  const imageNumbers = Array.from({ length: img }, (_, index) => index + 1);
  console.log(imageNumbers);
  let a = webName.replace(" ", "_");
  let b = a.toLowerCase();
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      id={b + "_project"}
      className="web_project"
    >
      {imageNumbers.map((num) => (
        <img
          key={num}
          src={"./" + webName + "/" + webName + "_0" + num + ".png"}
          alt={webName + num}
          className="project_img"
        />
      ))}
      <h2>{title}</h2>
      {comment && <p className="comment">{comment}</p>}
    </motion.div>
  );
}

export default Website;
