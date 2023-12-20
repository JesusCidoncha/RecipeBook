import "../styles/Sidebar-module-style.css";
import { Link } from "react-router-dom";
import "../styles/Sidebar-module-style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/about">
        <button className="aboutUsBtn">About us</button>
      </Link>
    </div>
  );
}

export default Sidebar;
