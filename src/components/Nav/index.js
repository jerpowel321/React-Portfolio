import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


function Nav() {
	return (
<nav className="navbar navbar-expand-sm blue sticky-top">
<button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    <div className="navbar-collapse navbar-collapse1 collapse w-100 order-1 order-sm-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link hvr-grow" href="#aboutPage">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link hvr-grow" href="#skillsPage">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link hvr-grow" href="#portfolioPage">Projects</a>
            </li>
			<li className="nav-item">
                <a className="nav-link hvr-grow" href="mailto:jerpowel321@gmail.com?">Contact</a>
            </li>
           
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a href="#"><div className="navbar-brand mx-auto initals" >JP</div></a>
        <button className="navbar-toggler nt1" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"> <i class="fas pt-1 fa-bars"></i></span>
        </button>
    </div>
    <div className="navbar-collapse navbar-collapse2 collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/jerpowel321" target="_blank"><i className="fab fa-github fa-2x icon hvr-grow"></i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank"><i className="fab fa-linkedin fa-2x ml hvr-grow nml"></i></a>
            </li>
			<li className="nav-item">
                <a className="nav-link" href="https://www.dropbox.com/s/cn61ixbznlm06ko/JenniferPowell_Resume.pdf?dl=0" target="blank"><i className="fas fa-file-pdf fa-2x ml hvr-grow nml"></i></a>
            </li>
					
        </ul>
    </div>
</nav>


	
	)
};


export default Nav;