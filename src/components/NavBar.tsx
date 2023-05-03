import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Terms from "../screens/TermsAndConditions";

function NavBar() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Navbar
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about/10" className="nav-link">About 10</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about/20" className="nav-link">About 20</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/terms-and-conditions" className="nav-link">Terms and conditions</NavLink>
                </li>
            
            </ul>
            </div>
        </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about/:id" element={<About/>}/>
            <Route path="/terms-and-conditions" element={<Terms/>}/>
        </Routes>

        
    </Router>
  );
}

export default NavBar;
