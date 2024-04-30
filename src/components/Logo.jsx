import { Link } from "react-router-dom";

function Logo() {
  const firstName = "david";
  const lastName = "mendoza";
  return (
    <>
      <div id="logo">
        <Link to="/">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
        </Link>
      </div>
    </>
  );
}

export default Logo;
