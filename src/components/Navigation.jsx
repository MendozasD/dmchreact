/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/", label: "Home", id: "home_button", class: "navigation_button" },
    {
      to: "/webs",
      label: "Pages",
      id: "webs_button",
      class: "navigation_button",
    },
    {
      to: "/illustrations",
      label: "Illustrations",
      id: "illustrations_button",
      class: "navigation_button",
    },
    {
      to: "/about",
      label: "About",
      id: "about_button",
      class: "navigation_button",
    },
  ];

  const filteredLinks = links.filter((link) => link.to !== currentPath);

  return (
    <motion.nav id="navigation">
      {filteredLinks.map((link) => (
        <Link key={link.to} to={link.to} id={link.id} className={link.class}>
          {link.label}
        </Link>
      ))}
    </motion.nav>
  );
}

export default Navigation;
