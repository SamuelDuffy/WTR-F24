import { BrowserRouter as Routes, NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
      <NavLink to="/experience" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Experience</NavLink>
      <NavLink to="/side-quests" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Side Quests</NavLink>
    </nav>
  )
}

export default NavBar
