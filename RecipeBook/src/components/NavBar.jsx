import "../styles/NavBar-module-style.css";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <nav className="navBar">
      <h1>Yourecipes</h1>
      <img src={logo} alt="logo" />
    </nav>
  );
}

export default NavBar;
