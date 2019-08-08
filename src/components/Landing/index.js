import React from "react";
import { Link } from "react-router-dom";
import { Random } from 'react-animated-text';
// import { Wave2 } from '../Wave';



function Landing() {
	return (

		<div className="landing">
			<div className="space"></div>
			<div className="darkbg">
			<div className="container d-flex flex-row ">
				<div className="Row">
					<div className="col-3">
						<img className="mt-5" src="/images/me.jpeg" alt="me" height="350px"/>
					</div>
					<div className="col-9">
						<h1 className="text-center pt-5">Jennifer Powell</h1>
						<h1 className="text-center">Full Stack Web Developer</h1>
						<p>Hi! I'm a full stack developer located in the beautiful city of San Francisco.</p>
					</div>
				</div>

			</div>
			</div>

		</div>

	)
};


{/* 			
	<Wave2></Wave2> */}
export default Landing;