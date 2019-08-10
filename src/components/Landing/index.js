import React from "react";
import { Link } from "react-router-dom";
import { Random } from 'react-animated-text';
// import { Wave2 } from '../Wave';
import Typist from 'react-typist';
import "./style.css";


function Landing() {
	return (

		<div className="landing">
			<div className="container flex-container text-center">
			<Typist>
			<Typist.Delay ms={1000} />
				<span className="name"> Jennifer Powell </span>
				<br />
				<Typist.Delay ms={1000} />
				<div className="title">
					<p> Full Stack Developer </p>

				</div>
			</Typist>
			</div>
		</div>

	)
};


{/* 			
	<Wave2></Wave2> */}
export default Landing;