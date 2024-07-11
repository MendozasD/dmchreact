/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function HomeBubble({ topBubble, bottomBubble, styling, bubbleColor, link }) {
  return (
    <Link to={`/${link}`} className="home_bubble" style={{ ...styling }}>
      <p style={{ backgroundColor: bubbleColor }}>{topBubble}</p>
      <p style={{ backgroundColor: bubbleColor }}>{bottomBubble}</p>
    </Link>
  );
}
export default HomeBubble;
