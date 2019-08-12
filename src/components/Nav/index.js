import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


function Nav() {
	return (
<nav class="navbar navbar-expand-sm blue sticky-top">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link hvr-grow" href="#aboutPage">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link hvr-grow" href="#skillsPage">Skills</a>
            </li>
            <li class="nav-item">
                <a class="nav-link hvr-grow" href="#portfolioPage">Projects</a>
            </li>
			<li class="nav-item">
                <a class="nav-link hvr-grow" href="mailto:jerpowel321@gmail.com?">Contact</a>
            </li>
           
        </ul>
    </div>
    <div class="mx-auto order-0">
        <div class="navbar-brand mx-auto initals" >JP</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/jerpowel321" target="_blank"><i className="fab fa-github fa-2x icon hvr-grow"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank"><i class="fab fa-linkedin fa-2x ml-2 hvr-grow"></i></a>
            </li>
			<li class="nav-item">
                <a class="nav-link" href="https://www.dropbox.com/s/fe8vanzpccfapva/JenniferPowell_Resume.pdf?dl=0" target="blank"><i class="fas fa-file-pdf fa-2x ml-2 hvr-grow"></i></a>
            </li>
					
        </ul>
    </div>
</nav>


	
	)
};


export default Nav;