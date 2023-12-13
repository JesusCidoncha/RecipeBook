import "../styles/NavBar-module-style.css";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <a>YouRecipes</a>
      </Link>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
}

export default NavBar;