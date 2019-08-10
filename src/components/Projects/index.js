import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const projects = [
	{ project: 'Truck Tracker', Img:'/images/trucktracker.png', GitHub: 'https://github.com/jerpowel321/TruckTracker-FE', Deployed: 'https://trucktrackerdemo.herokuapp.com/',Description: 'Full-Stack web application which allows users to view real-time nearby foodtrucks. Also allows business owners to set up an account and to update their current location.', Technologies: 'HTML, CSS, javaScript, Bootstrap, React, Firebase, mySQL, Express, GoogleMaps API' },
	{ project: 'EventPRO', Img:'/images/eventpro.png', GitHub: 'https://github.com/jerpowel321/EventPRO', Deployed: 'https://limitless-fortress-24134.herokuapp.com/', Description: "EventPRO is an event planning application that provides users with a centralized location to plan upcoming events and organize to-do's.", Technologies: 'HTML, CSS, javaScript, Handlebars, Node.JS, Materialize.css, MySQL' },
	{ project: 'JonSnow Clicky Game', Img:'/images/jonsnow.png', GitHub: 'https://github.com/jerpowel321/JonSnow-ClickyGame', Deployed: 'https://jerpowel321.github.io/JonSnow-ClickyGame/', Description: 'This is a Jon Snow clicky memory game. See if you can get a perfect score!', Technologies: 'HTML, CSS, Bootstrap, javaScript, jQuery, React, Node.js' },
	{ project: 'Books App', Img: '/images/booksapp.png', GitHub: 'https://github.com/jerpowel321/books-app', Deployed: 'https://amazingbookstore.herokuapp.com/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Eat-Da-Pizza', Img: '/images/eatDaPizza.png', GitHub: 'https://github.com/jerpowel321/Pizza', Deployed: 'https://eatdapizza321.herokuapp.com/', Description: "Eat-Da-Pizza is a restaurant app that lets users input the names of Pizzas they'd like to eat. Whenever a user submits a pizza’s name, the app will display the pizza on the left side of the page -- waiting to be devoured. Each Pizza in the waiting area also has a Devour it!button. When the user clicks it, the burger will move to the right side of the page. The app stores every pizza in a database, whether devoured or not.", Technologies: 'html, css, javascript, MySQL, Node, Express, Handlebars and a homemade ORM' },
	{ project: 'Vacation Finder', Img: '/images/vacationFinder.png', GitHub: 'https://github.com/jerpowel321/Friend-Finder', Deployed: 'https://vacationfinder.herokuapp.com/', Description: 'placeholder', Technologies: 'html, css, javascript' },
	{ project: 'Bamazon', Img: 'https://media.giphy.com/media/mxSYpbCWQFQAMh9oOU/giphy.gif', Description: 'Bamazon is an e-commerce storefront where customers can buy magical items such as Obiedient Wand and managers can restock inventory.', Technologies: 'javaScript, jQuery, mySql, Node.js' },
	{ project: 'Hey Liri', Img: 'https://media.giphy.com/media/yNfH8AGUopyRbR8wQJ/giphy.gif', GitHub: 'https://github.com/jerpowel321/liri-node-app', Description: 'Liri, aka Language Interpretation and Recognition Interface accepts the following commands Liri look up concert, Liri look up song, Liri look up movie, Liri Spotify a random song!', Technologies: 'javaScript, JQuery, Node.js' },
	{ project: 'Train Scheduler', Img: '/images/trainScheduler.png', GitHub: 'https://github.com/jerpowel321/Train-Scheduler', Deployed: 'https://jerpowel321.github.io/Train-Scheduler/', Description: 'All aboard! Check the train schedule to see what time the next train to Neverland leaves or check out another cool destination', Technologies: 'HTML, CSS, javaScript, JQuery, Firebase, Moment.js' },
	{ project: 'GifTastic', Img: '/images/giphy.png', GitHub: 'https://github.com/jerpowel321/GifTastic', Deployed: 'https://jerpowel321.github.io/GifTastic/', Description: 'Enter a cute furry animal such as Panda or enter a movie such as Kung Fu Panda and explore the majestic animal through GIFs.', Technologies: 'HTML, CSS, javaScript, jQuery' },
	{ project: 'House Trivia Game', Img: '/images/house.png', GitHub: 'https://github.com/jerpowel321/TriviaGame', Deployed: 'https://jerpowel321.github.io/TriviaGame/', Description: 'Think you know Gregory House and the gang at Princeton-Plainsboro Teaching Hospital? This quiz will put your knowledge to the test. Careful! Spoilers ahead.', Technologies: 'HTML, CSS, javaScript, jQuery' }
];



// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#2D5DA1', '#6d40bf', '#5d4037', '#D05340', '#56887D', '#D64550', '#7C98B3', '#E936A7', '#F0C808', '#2E5894', '#8D4E85', , '#4BC7CF', '#01786F'];

class Projects extends React.Component {
	render() {
		return (
			<div className="portfolioSection">
				
				<h1 className="text-center pt-5">Portfolio</h1>
				<div className=" projectExample container">
					{projects.map((a, i) =>
						<div className="project " style={{ border: '5px solid colors[i]' }}>
							{/* <i style={{ color: colors[i] }} class={a.icon}></i>
							<div className="img_containter">
								<img src={a.img} />
							</div> */}
							<button className="projectBody" type="button">
							<div class="img-hover-zoom">
							<img className="projectImg" key={i} src={a.Img} />
							</div>
							<h3 className="text-center pt-3 pb-2" key={i}>{a.project}</h3>
							<p key={i}>{a.Description}
							</p>
							<p key={i}>{a.Technologies}
							</p>
							</button>
							<p className="text-center pt-2">
								<a  key={i} href={a.GitHub} target="_blank"><i className="fab fa-github fa-2x icon"></i></a>
								<a  key={i} href={a.Deployed} target="_blank"><i className="fas fa-rocket fa-2x ml-2 icon"></i></a>
								
							</p>
							
						</div>
					)}
				</div>
			</div>
		);
	}
}




export default Projects;