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
	{ skill: 'Mongoose', img: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg' },
	{ skill: 'Express', img: 'https://www.sohamkamani.com/static/express-routing-logo-65137ed3c844d05124dcfdab28263c21-ec9c1.png' },
	{ skill: 'MySQL', img: 'https://cdn.iconscout.com/icon/free/png-256/mysql-20-1174940.png' },
	{ skill: 'Sequalize', img: 'http://docs.sequelizejs.com/image/brand_logo.png' },
	{ skill: 'Node', icon: 'fab fa-node' },
	{ skill: 'Firebase', img: 'https://img.icons8.com/color/420/firebase.png' },
	{ skill: 'Handlebars', img: 'https://ui-ex.com/images/mustache-vector-1.png' },
	{ skill: 'JSON', img: 'https://static.thenounproject.com/png/446959-200.png' },
	{ skill: 'MERN', img: 'https://geeksperhour.com/wp-content/uploads/2019/02/mern-img.png	' },
	{ skill: 'Git', img: 'https://png.pngtree.com/svg/20160624/c79721329d.svg' },
	{ skill: 'Github', icon: 'fab fa-github' },
];



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#2D5DA1', '#6d40bf', '#5d4037','#D05340' , '#56887D', '#D64550', '#7C98B3',  '#E936A7','#F0C808', '#2E5894', '#8D4E85', , '#4BC7CF', '#01786F'];

class Skills extends React.Component {
	render() {
		return (
			<div class="skillsSection">
				<h1 className="text-center pt-2">Technical Skills</h1>
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





export default Skills;