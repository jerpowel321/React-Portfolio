import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const skills = [
	{ skill: 'React', icon: 'fab fa-react' },
	{ skill: 'JavaScript', icon: 'fab fa-js-square' },
	{ skill: 'HTML', icon: 'fab fa-html5' },
	{ skill: 'CSS', icon: 'fab fa-css3-alt' },
	{ skill: 'Jquery', img: 'http://www.iconninja.com/files/218/21/317/jquery-black-icon.png' },
	{ skill: 'Bootstrap', icon: 'fab fa-bootstrap' },
	{ skill: 'MongoDB', img: 'https://img.icons8.com/color/420/mongodb.png'},
	{ skill: 'Mongoose' },
	{ skill: 'Express' },
	{ skill: 'MySQL', img: 'https://cdn.iconscout.com/icon/free/png-256/mysql-20-1174940.png' },
	{ skill: 'Sequalize', img: 'http://docs.sequelizejs.com/image/brand_logo.png' },
	{ skill: 'Node', icon: 'fab fa-node' },
	{ skill: 'Firebase', img: 'https://img.icons8.com/color/420/firebase.png' },
	{ skill: 'Handlebars', img: 'https://ui-ex.com/images/mustache-vector-1.png' },
	{ skill: 'JSON', img: 'https://static.thenounproject.com/png/446959-200.png' },
	{ skill: 'MERN' },
	{ skill: 'Git', img: 'https://cdn0.iconfinder.com/data/icons/octicons/1024/git-branch-512.png' },
	{ skill: 'Github', icon: 'fab fa-github' },
];



const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#c7f2cc', '#6d40bf', '#5d4037', '#baf6ff', '00B295', 'D64550', '7C98B3', 'F0C808'];

class Skills extends React.Component {
	render() {
		return (
			<div class="skillsSection">
				<div class="container skillExample ">
					{skills.map((a, i) => <div class="box " style={{ border: '5px solid colors[i]' }}> <i style={{ color: colors[i] }} class={a.icon}></i><img src={a.img} /><p style={{ color: colors[i] }} key={i}>{a.skill}</p></div>)}
				</div>
			</div>
		);
	}
}


//   ReactDOM.render(<Example />, document.getElementById('View'));
// // function Skills(props) {
// 	return (
//         <div class="box">
//           <i class={props.icon}></i>
//           <img src={props.img}/>
//           <br /><p>{props.skill}</p>

//         </div>
// 	)
// };

export default Skills;