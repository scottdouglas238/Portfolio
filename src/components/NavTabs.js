import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css"

function NavTabs() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
			  <ul className="navbar-nav mr-auto">
        <li className="nav-item btn-dark">
       <Link
        to="/about"
        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
      >
        About
      </Link>
    </li>
    <li className="nav-item btn-dark">
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
      >
        Portfolio
      </Link>
    </li>
    <li className="nav-item btn-dark">
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </Link>
    </li>
			  </ul>
			  <div className="form-inline my-2 my-lg-0">
				<h3>Scott Douglas</h3>
			  </div>
		  </nav>
    </div>
    );
  }
  
  export default NavTabs;
  