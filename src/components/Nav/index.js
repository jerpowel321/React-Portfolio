import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


function Nav() {
	return (
	  <nav class="navbar  navbar-expand-lg blue text-center sticky-top">
    <div class="container">
    <a class="navbar-brand" href="#">
      <img id="penguin" src="assets/images/penguin.png" width="32" height="32" class="d-inline-block" alt=""/>
      Jennifer Powell
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-right" href="#">About<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-right" href="#skillsPage">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-right" href="#portfolioPage">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-right" href="#contactPage">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>


	
	)
};


export default Nav;