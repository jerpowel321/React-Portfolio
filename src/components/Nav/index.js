import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
	return (<div>
		{/* <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
			<a class="navbar-brand" href="#">Jennifer Powell</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav navbar-group-right">
					<li class="nav-item active navbar-group-right">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item navbar-group-right">
						<a class="nav-link" href="#">About</a>
					</li>
					<li class="nav-item navbar-group-right">
						<a class="nav-link" href="skillsSection">Skills</a>
						<NavLink className="" to={"/"}></NavLink>
					</li>
					<li class="nav-item navbar-group-right">
						<a class="nav-link" href="#">Portfolio</a>
					</li>
					<li class="nav-item navbar-group-right">
						<a class="nav-link " href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav> */}
		<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
			<div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
				<ul class="navbar-nav ml-auto text-center">
					<li class="nav-item active">
						<p >Jennifer Powell</p>
					</li>
				</ul>
			</div>
			<div class="mx-auto my-2 order-0 order-md-1 position-relative">
				<a class="mx-auto" href="#">
					<div><img src="https://blogmedia.dealerfire.com/wp-content/uploads/sites/451/2016/12/Lime-Green-Circle_df.jpg" class="rounded-circle greendot" />
					<p>JP</p></div>
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
			<div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
				<ul class="navbar-nav mr-auto text-center">
					<li class="nav-item">
						<a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Skills</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Portfolio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	)
};


export default Nav;