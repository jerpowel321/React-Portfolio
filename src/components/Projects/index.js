import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const projects = [
	{ project: 'Truck Tracker', Img: '/images/trucktracker.png', GitHub: 'https://github.com/jerpowel321/TruckTracker-FE', Deployed: 'https://trucktrackerdemo.herokuapp.com/', Description: 'Full-Stack web application which allows users to view real-time nearby foodtrucks. Also allows business owners to set up an account and to update their current location.', Technologies: 'HTML, CSS, javaScript, Bootstrap, React, Firebase, mySQL, Express, GoogleMaps API' },
	{ project: 'EventPRO', Img: '/images/eventpro.png', GitHub: 'https://github.com/jerpowel321/EventPRO', Deployed: 'https://limitless-fortress-24134.herokuapp.com/', Description: "EventPRO is an event planning application that provides users with a centralized location to plan upcoming events and organize to-do's.", Technologies: 'HTML, CSS, javaScript, Handlebars, Node.JS, Materialize.css, MySQL' },
	{ project: 'JonSnow Clicky Game', Img: '/images/jonsnow.png', GitHub: 'https://github.com/jerpowel321/JonSnow-ClickyGame', Deployed: 'https://jerpowel321.github.io/JonSnow-ClickyGame/', Description: 'A click based memory game built with React! Try to see if you can get a perfect score by selecting each picture of Jon Snow once!', Technologies: 'HTML, CSS, Bootstrap, javaScript, React, Node.js' },
	{ project: 'Books App', Img: '/images/booksapp.png', GitHub: 'https://github.com/jerpowel321/books-app', Deployed: 'https://amazingbookstore.herokuapp.com/', Description: 'Full-stack MERN application that queries the Google books API and retrieves information on books users search for. Also allows users to save books to their collection.', Technologies: 'HTML, CSS, javaScript, React, MongoDB, Node.js, Express, mongoose' },
	{ project: 'Train Scheduler', Img: '/images/trainScheduler.png', GitHub: 'https://github.com/jerpowel321/Train-Scheduler', Deployed: 'https://jerpowel321.github.io/Train-Scheduler/', Description: 'All aboard! Check the train schedule to see what time the next train to Neverland leaves or check out another cool destination', Technologies: 'HTML, CSS, javaScript, JQuery, Firebase, Moment.js' },
	{ project: 'Vacation Finder', Img: '/images/vacationFinder.png', GitHub: 'https://github.com/jerpowel321/Friend-Finder', Deployed: 'https://vacationfinder.herokuapp.com/', Description: 'Not sure where to go on your next vacation? Answer 10 short questions and be matched with a destination for next vacation!', Technologies: 'HTML, CSS, javaScript, Node.js, Express' },
	{ project: 'Bamazon', Img: 'https://media.giphy.com/media/mxSYpbCWQFQAMh9oOU/giphy.gif', GitHub: 'https://github.com/jerpowel321/Bamazon', Description: 'Bamazon is an e-commerce storefront where customers can buy magical items such as Obiedient Wands and managers can restock inventory.', Technologies: 'javaScript, jQuery, mySql, Node.js' },
	{ project: 'Hey Liri', Img: 'https://media.giphy.com/media/yNfH8AGUopyRbR8wQJ/giphy.gif', GitHub: 'https://github.com/jerpowel321/liri-node-app', Description: 'Liri, aka Language Interpretation and Recognition Interface accepts the following commands Liri look up concert, Liri look up song, Liri look up movie, Liri Spotify a random song!', Technologies: 'javaScript, JQuery, Node.js' },
	{ project: 'House Trivia Game', Img: '/images/house.png', GitHub: 'https://github.com/jerpowel321/TriviaGame', Deployed: 'https://jerpowel321.github.io/TriviaGame/', Description: 'Think you know Gregory House and the gang at Princeton-Plainsboro Teaching Hospital? This quiz will put your knowledge to the test. Careful! Spoilers ahead.', Technologies: 'HTML, CSS, javaScript, jQuery' },
	{ project: 'Eat-Da-Pizza', Img: '/images/eatDaPizza.png', GitHub: 'https://github.com/jerpowel321/Pizza', Deployed: 'https://eatdapizza321.herokuapp.com/', Description: "Eat-Da-Pizza is a restaurant app that lets users submit Pizzas orders. Once you place your order you can mark the pizza as devoured. All orders and devoured pizzas are stored.", Technologies: 'HTML, CSS, javaScript, MySQL, Node, Express, Handlebars' },
	{ project: 'GifTastic', Img: '/images/giphy.png', GitHub: 'https://github.com/jerpowel321/GifTastic', Deployed: 'https://jerpowel321.github.io/GifTastic/', Description: 'Enter a cute furry animal such as Panda or enter a movie such as Kung Fu Panda and explore the majestic animal through GIFs.', Technologies: 'HTML, CSS, javaScript, jQuery' }
];

class Projects extends React.Component {
	render() {
		return (
			<div className="portfolioSection">

				<h1 className="text-center pt-5">Portfolio</h1>
				<div className=" projectExample container">
					{projects.map((a, i) =>
						<div className="project" style={{ border: '5px solid colors[i]' }}>
							<div className="projectBody" >
								<div className="img-hover-zoom">
									<img className="projectImg" key={i} src={a.Img} />
								</div>
								<h3 className="text-center pt-3" key={i}>{a.project}</h3>
								<p className=" pl-1 pr-1 description" key={i}>{a.Description}
								</p>
								<p className="text-center technologies " key={i}>{a.Technologies}
								</p>
							</div>
							<p className="text-center pt-3">
								<a key={i} href={a.GitHub} target="_blank"><i className="fab fa-github fa-2x hvr-grow"></i ></a>
								{a.Deployed
                                    ? <a key={i} href={a.Deployed} target="_blank"><i className="fas fa-rocket fa-2x ml-2 hvr-grow"></i></a>
                                    : null
                                  }
							</p>
						</div>

					)}
				</div>
			</div>
		);
	}
}

export default Projects;