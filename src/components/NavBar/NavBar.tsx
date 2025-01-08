import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/WTR-F24/home" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
      <NavLink to="/WTR-F24/eperience" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Experience</NavLink>
      <NavLink to="/WTR-F24/side-quests" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Side Quests</NavLink>
    </nav>
  );
};

export default NavBar;
