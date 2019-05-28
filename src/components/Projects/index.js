import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Projects = [
	{ project: 'React', GitHub: Deployed:  },
	{ project: 'JavaScript', GitHub: Deployed:  },
	{ project: 'HTML', GitHub: Deployed:   },
	{ project: 'CSS', GitHub: Deployed:   },
	{ project: 'Jquery', GitHub: Deployed:  },
	{ project: 'Bootstrap', GitHub: Deployed:  },
	{ project: 'MongoDB', GitHub: Deployed: },
	{ project: 'Mongoose', GitHub: Deployed:  },
	{ project: 'Express', GitHub: Deployed:  },
	{ project: 'MySQL', GitHub: Deployed:  },
	{ project: 'Sequalize', GitHub: Deployed:  },
	{ project: 'Node', GitHub: Deployed:   },
	{ project: 'Firebase', GitHub: Deployed:  },
	{ project: 'Handlebars', GitHub: Deployed: },
	{ project: 'JSON', GitHub: Deployed:  },
	{ project: 'MERN', GitHub: Deployed:  },
	{ project: 'Git', GitHub: Deployed:  },
	{ project: 'Github', GitHub: Deployed:   },
];



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#2D5DA1', '#6d40bf', '#5d4037','#D05340' , '#56887D', '#D64550', '#7C98B3',  '#E936A7','#F0C808', '#2E5894', '#8D4E85', , '#4BC7CF', '#01786F'];

class Projects extends React.Component {
	render() {
		return (
			<div class="skillsSection">
				<h1 className="text-center pt-2">Portfolio</h1>
				<div class="container skillExample ">
					{skills.map((a, i) => <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front"><div class="box " style={{ border: '5px solid colors[i]' }}> <i style={{ color: colors[i] }} class={a.icon}></i><div className="img_containter"><img src={a.img} /></div></div></div>
							<div class="back" style={{ backgroundColor: colors[i]}}><p className=" pt-5 text-center text-white" key={i}>{a.skill}</p>
							</div>
						</div>
					</div>
					)}
				</div>
			</div>
		);
	}
}





export default Projects;