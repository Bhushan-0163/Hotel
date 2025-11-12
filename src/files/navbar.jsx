import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  
return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   <img src="./Restaurant.jpg" className="rounded-circle" alt="..." id="I1"/>
    <Link className="navbar-brand" to="/" id="n2">Hotel Samruddhi</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active"  to="/" id="n1">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contact">Contact</Link>
        </li>
        <li className="nav-item" id="l1">
          <Link className="nav-link" to="Login">Log in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}



