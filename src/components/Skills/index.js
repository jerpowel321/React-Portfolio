import React from "react";
import { Link } from "react-router-dom";
import "./style.css";




const skills = [
	{ skill: 'React', icon: 'fab fa-react' },
	{ skill: 'JavaScript', icon: 'fab fa-js-square' },
	{ skill: 'HTML', icon: 'fab fa-html5' },
	{ skill: 'CSS', icon: 'fab fa-css3-alt' },
	{ skill: 'Jquery', img: 'https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png' },
	{ skill: 'Bootstrap', icon: 'fab fa-bootstrap' },
	{ skill: 'MongoDB', img: 'https://img.icons8.com/color/420/mongodb.png' },
	{ skill: 'Mongoose', img: 'http://mongodb-tools.com/img/mongoose.png' },
	{ skill: 'Express', img: 'https://cdn-images-1.medium.com/max/800/1*j8DELPVuI_w8045sxmHQsA.png' },
	{ skill: 'MySQL', img: 'https://cdn.iconscout.com/icon/free/png-256/mysql-20-1174940.png' },
	{ skill: 'Sequalize', img: 'http://docs.sequelizejs.com/image/brand_logo.png' },
	{ skill: 'Node', icon: 'fab fa-node' },
	{ skill: 'Firebase', img: 'https://img.icons8.com/color/420/firebase.png' },
	{ skill: 'Handlebars', img: 'https://cdn.iconscout.com/icon/free/png-512/handlebars-1-285290.png' },
	{ skill: 'JSON', img: '/images/json.png' },
	{ skill: 'MERN', img: 'https://geeksperhour.com/wp-content/uploads/2019/02/mern-img.png	' },
	{ skill: 'Git', icon: 'fas fa-code-branch' },
	{ skill: 'Github', icon: 'fab fa-github' },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#2D5DA1', '#6d40bf', '#5d4037', '#D05340', '#56887D', '#D64550', '#339ACC', '#E936A7', '#FF9933', '#F0C808', '#8D4E85', '#7C98B3', '#4BC7CF', '#01786F'];

class Skills extends React.Component {
	render() {
		return (
			<div className="skillsSection">
				<h1 className="text-center pt-5">Technical Skills</h1>
				<div className="container skillExample ">
					{skills.map((a, i) =>
						<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
							<div className="flipper">
								<div className="front">
									<div className="box " style={{ border: '5px solid colors[i]' }}>
										<i style={{ color: colors[i] }} className={a.icon}></i>
										<div className="img_containter">
											<img src={a.img} />
										</div>
									</div>
								</div>
								<div className="back" style={{ backgroundColor: colors[i] }}>
									<p className=" pt-5 text-center  skillsize text-white" key={i}>{a.skill}</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Skills;