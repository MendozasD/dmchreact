/* eslint-disable react/prop-types */

function HomeBubble({
  topBubble,
  bottomBubble,
  left = null,
  right = null,
  zIndex = 1,
}) {
  return (
    <div
      className="home_bubble"
      style={{ left: left, right: right, zIndex: zIndex }}
    >
      <p>{topBubble}</p>
      <p>{bottomBubble}</p>
    </div>
  );
}
export default HomeBubble;
