// import { NavLink } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">Home</a>
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#side-quests" className="nav-link">Side Quests</a>
    </nav>
  );
};

export default NavBar;
