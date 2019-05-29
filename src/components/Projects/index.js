import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const projects = [
	{ project: 'Truck Tracker', GitHub: 'https://github.com/Mel-Marsollier/WhatTheTruck-FE', Deployed: 'https://deployedwtt.herokuapp.com/', Description: 'Full-Stack web application which allows users to view real-time nearby foodtrucks. The allows business owners to set up an account and to update their current location.', Technologies: 'html, css, javascript, bootstrap, react, firebase, mysql, express, googlemaps api' },
	{ project: 'EventPRO', GitHub: 'https://github.com/jerpowel321/EventPRO', Deployed: 'https://limitless-fortress-24134.herokuapp.com/', Description: "EventPRO is an event planning application that provides users with a centralized location to plan upcoming events and organize to-do's. I was part of a team of 3 that made this app for our full-stack bootcamp, and I was personally in charge of front-end content generation, querying data for users once they have logged in, creating the routes, pages, forms and content and styling a majority of the app using Materialize.css components.", Technologies: 'html, css, javascript' },
	{ project: 'JonSnow Clicky Game', GitHub: 'https://github.com/jerpowel321/JonSnow-ClickyGame', Deployed: 'https://jerpowel321.github.io/JonSnow-ClickyGame/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Books App', GitHub: 'https://github.com/jerpowel321/books-app', Deployed: 'https://amazingbookstore.herokuapp.com/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Eat-Da-Pizza', Img: '/images/eatDaPizza.png', GitHub: 'https://github.com/jerpowel321/Pizza', Deployed: 'https://eatdapizza321.herokuapp.com/', Description: "Eat-Da-Pizza is a restaurant app that lets users input the names of Pizzas they'd like to eat. Whenever a user submits a pizza’s name, the app will display the pizza on the left side of the page -- waiting to be devoured. Each Pizza in the waiting area also has a Devour it!button. When the user clicks it, the burger will move to the right side of the page. The app stores every pizza in a database, whether devoured or not.", Technologies: 'html, css, javascript, MySQL, Node, Express, Handlebars and a homemade ORM' },
	{ project: 'Vacation Finder', Img: '/images/vacationFinder.png', GitHub: 'https://github.com/jerpowel321/Friend-Finder', Deployed: 'https://vacationfinder.herokuapp.com/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Bamazon', Img: 'https://media.giphy.com/media/QmFkxcdd9orhlKZ7Dn/giphy.gif', GitHub: 'https://github.com/jerpowel321/Bamazon', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Hey Liri', Img: 'https://media.giphy.com/media/yNfH8AGUopyRbR8wQJ/giphy.gif', GitHub: 'https://github.com/jerpowel321/liri-node-app', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Train Scheduler', Img: '/images/trainScheduler.png', GitHub: 'https://github.com/jerpowel321/Train-Scheduler', Deployed: 'https://jerpowel321.github.io/Train-Scheduler/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'GifTastic', Img: '/images/giphy.png', GitHub: 'https://github.com/jerpowel321/GifTastic', Deployed: 'https://jerpowel321.github.io/GifTastic/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Trivia Game', Img: '/images/house.png', GitHub: 'https://github.com/jerpowel321/TriviaGame', Deployed: 'https://jerpowel321.github.io/TriviaGame/', Description: 'placeholder', Technologies: 'html, css, javascript' }
];



// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#2D5DA1', '#6d40bf', '#5d4037', '#D05340', '#56887D', '#D64550', '#7C98B3', '#E936A7', '#F0C808', '#2E5894', '#8D4E85', , '#4BC7CF', '#01786F'];

class Projects extends React.Component {
	render() {
		return (
			<div class="portfolioSection">
				<h1 className="text-center pt-2">Portfolio</h1>
				<div class=" projectExample ">
					{projects.map((a, i) =>
						<div class="project hvr-float-shadow " style={{ border: '5px solid colors[i]' }}>
							{/* <i style={{ color: colors[i] }} class={a.icon}></i>
							<div className="img_containter">
								<img src={a.img} />
							</div> */}
							<h3 className="text-center pt-3 pb-2" key={i}>{a.project}</h3>
							<img className="hvr-grow"key={i} src={a.Img} />

						
							<p className="p-3" key={i}>{a.Description}
							<div class="scrollbar scrollbar-night-fade">
								<div class="force-overflow"></div>
							</div>
							</p>
							<p className="text-center">
								<a className="p-3" key={i} href={a.GitHub}>GitHub Repo</a>
								<a className="p-3" key={i} href={a.Deployed}>Deployed Site</a>
							</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}




export default Projects;