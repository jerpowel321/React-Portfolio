import React from "react";
import { Link } from "react-router-dom";
import "./style.css";






class About extends React.Component {
    render() {
        return (
            <div className="aboutme pb-5">

                <div className="container flex-container">

                    <div className="text-center">

                        <img className="mt-5" src="/images/me.jpeg" alt="me" height="350px" />

                    </div>

                    <p className="mt-3"><b>Hello!</b> My name is Jennifer Powell and I am a Full Stack Developer.</p>
                    <p>My background is in accounting where I have worked for the past 4 years in the bay area. I have worked at one of the Big Four Firms and am CPA licensed. Recently, I decided to pursue a career in tech. This change came from the realization that I wanted to work in a more creative environment and my desire to code only grew stronger with time, ever since I took my first coding course at UC Santa Cruz.</p>
                    <p>Recently, I completed UC Berkeley’s 12 week full-time immersive full-stack Web Development Coding Bootcamp. The course involves 600+ hours of in and out of class learning and project work using HTML/CSS/JavaScript, jQuery, Git, deployment across static and dynamic sites, Node, Express, React, Firebase, MongoDB, MySQL, and computer science fundamentals.</p>
                    <p>This bootcamp ignited my passion for programming. I love expanding and utilizing my knowledge base through building quality websites and applications. My curiosity to learn has enabled me to tackle challenges head on and identify problems before they become larger issues.</p>
                    <p>I'm excited to start my career in tech and learn more about programming! I am a positive and driven person who enjoys working collaboratively and excels in a fast pace environment. I'm looking for opportunities to grow my career where I can apply my skills. </p>
                    <p>Thank you for your time!</p>
                    <p>-Jennifer</p>
                    <a href="https://www.dropbox.com/s/p4cxz05omtwpikc/JenniferPowell_Resume.pdf?dl=0" target="blank"><button type="button" id="resume" className="btn blue hvr-grow">Resume <i className="fas fa-arrow-right"></i></button>
                    </a>
                </div>
            </div>
        );
    }
}

export default About;