import React from "react";
import { Link } from "react-router-dom";
import Typist from 'react-typist';
import "./style.css";


function Landing() {
	return (

		<div className="landing">
			<div className="container text-center">
				<div className="intro">
			<Typist>
			<Typist.Delay ms={500} />
				<span className="name "> <b>Jennifer Powell</b> </span>
				<br />
				
				<div className="title">
					<p> Full Stack Developer </p>

				</div>
			</Typist>
			</div>
			
			</div>
		</div>

	)
};


export default Landing;