import React, { Component } from "react";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import About from "../components/About";
import ScrollingColorBackground from "react-scrolling-color-background";
class Portfolio extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Landing />
      <div className="aboutlink">
      <a  name="aboutPage" />
      </div>
      <About/>
      
      <a name="skillsPage" />
      <div id="firstgradient" />
      <Skills />
      <a name="portfolioPage" />
      <div id="gradient" />
      <Projects />
      </div >   
      );
  }

};

export default (Portfolio);
