/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  let currentLocation;
  if (location.pathname === "/") {
    currentLocation = "David Mendoza";
  } else if (location.pathname === "/webs") {
    currentLocation = "Web Pages";
  } else if (location.pathname === "/about") {
    currentLocation = "About Me";
  }
  //
  return <h1>{currentLocation}</h1>;
}

export default Header;
