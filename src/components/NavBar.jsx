import "../styles/NavBar-module-style.css";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import "../styles/NavBar-module-style.css";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <a>
          <h2>Find your Food</h2>
        </a>
      </Link>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
}

export default NavBar;
