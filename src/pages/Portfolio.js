import React, { Component } from "react";
import Card from "../components/Cards";
import Skills from "../components/Skills";
import Nav from "../components/Nav";
// import VectorBackground from "../components/VectorBackground";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {/* <VectorBackground /> */}
        <div className="landing">
        <h1 className="text-center pt-5">Hello! My name is Jennifer Powell. Welcome to my portfolio page. </h1>
        <h1 className="text-center">Full Stack Web Developer</h1>
        <div className="container">
          <div className="wrap">
            <div className="cube">
              <div className="front">front</div>
              <div className="back">back</div>
              <div className="top">top</div>
              <div className="bottom">bottom</div>
              <div className="left">left</div>
              <div className="right">right</div>
            </div>
          </div>
        </div>
        </div>
       
        <div className="skillsContainer"></div>

      
        <Skills />

      </div>   
      );
    }
  
  };
  
  export default (Portfolio);
