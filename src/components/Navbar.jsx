import "../styles/Navbar.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// NAVBAR WORKS CORRECTLY BUT THE EXIT ANIMATION HANDLED BY FRAMER MOTION
// IS NOT WORKING BECAUSE THE NAVBAR COMPONENT IS OUTSIDE THE ANIMATION-PRESENCE
// WRAPPER WHICH IS LOCATED IN APP.JSX
function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth >= 720 ? false : true);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // LOGO
  function Logo() {
    return (
      <>
        <motion.div id="logo" whileHover={{ filter: "blur(1px)" }}>
          <Link to="/">
            <p style={{ color: currentPath === "/" && "white" }}>
              {"David"}
              <br />
              {"Mendoza"}
            </p>
          </Link>
        </motion.div>
      </>
    );
  }

  // MANAGING RESIZING AND RESPONSIVE OUTPUT
  window.addEventListener("resize", () => {
    window.innerWidth >= 720 ? setMobile(false) : setMobile(true);
  });
  // MANAGING RESIZING AND RESPONSIVE OUTPUT
  ////////////////////////////////
  // SHOW OR HIDE DROPDOWN
  function handleClick() {
    setShowDropdown((showDropdown) => !showDropdown);
  }
  // SHOW OR HIDE DROPDOWN

  // SHOW DROPDOWN ICON OR FLEX MENU LIST
  function menuType() {
    // RENDER DROPDOWN ICON WHEN MOBILE
    const dropdownIcon = (
      <motion.button id="dropdown_icon" onClick={handleClick}>
        <motion.span className="bar"></motion.span>
        <motion.span className="bar"></motion.span>
        <motion.span className="bar"></motion.span>
      </motion.button>
    );
    // SHOW FLEX MENU LIST WHEN DESKTOP
    const menuDesktop = (
      <>
        <motion.span whileHover={{ translateY: -5 }}>
          <Link to="/webs" style={{ color: currentPath === "/" && "white" }}>
            Webs
          </Link>
        </motion.span>
        <motion.span whileHover={{ translateY: -5 }}>
          <Link
            to="/illustrations"
            style={{ color: currentPath === "/" && "white" }}
          >
            Illustrations
          </Link>
        </motion.span>
        <motion.span whileHover={{ translateY: -5 }}>
          <Link to="/about" style={{ color: currentPath === "/" && "white" }}>
            About me
          </Link>
        </motion.span>
      </>
    );
    return mobile ? dropdownIcon : menuDesktop;
  }

  const dropdownList = (
    <motion.div
      id="navbar_list_dropdown"
      initial={{ y: -100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -1000, opacity: 0.2 }}
    >
      <Link to="/" onClick={handleClick}>
        <span>Home</span>
      </Link>
      <Link to="/illustrations" onClick={handleClick}>
        <span>Illustrations</span>
      </Link>
      <Link to="/webs" onClick={handleClick}>
        <span>Webs</span>
      </Link>
      <Link to="/about" onClick={handleClick}>
        <span>About me</span>
      </Link>
      <button onClick={handleClick}>x</button>
    </motion.div>
  );

  return (
    <>
      <header>
        <nav>
          {Logo()}
          <div id="menu_list">{menuType()}</div>
        </nav>
      </header>
      {showDropdown && dropdownList}
    </>
  );
}

export default Navbar;
