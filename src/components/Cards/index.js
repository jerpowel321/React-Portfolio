import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function Card(props) {
	return (
		<div>
			<div className="card project border-dark" >
			<div className="text-center">
				<img className={`${props.imageClass} card-img-top `} src={props.image}/>
				</div>	
			<div className="card-body">
					<h5 className="card-title font5 redText text-center">{props.title}</h5>
					<div className="text-center">
					<div className="btn text-white " >{props.buttonText}
					<i className={`fas la-lg ${props.icon} buttonIcon`}></i>
					</div></div>
				</div>
			</div>
		</div>
	)
};

export default Card;