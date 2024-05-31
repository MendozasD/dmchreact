/* eslint-disable react/prop-types */
function Website({ webName, comment }) {
  let a = webName.replace(" ", "_");
  let b = a.toLowerCase();
  return (
    <div id={b + "_project"}>
      <h2>{webName}</h2>
      <p>{comment}</p>
    </div>
  );
}

export default Website;
