import React, { Component } from "react";
import Card from "../components/Cards";
import Skills from "../components/Skills";
// import VectorBackground from "../components/VectorBackground";

class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* <VectorBackground /> */}
        <div className="landing"></div>
        <div className="container">
          {/* <div className="wrap"> */}
            <div className="cube">
              <div className="front">front</div>
              <div className="back">back</div>
              <div className="top">top</div>
              <div className="bottom">bottom</div>
              <div className="left">left</div>
              <div className="right">right</div>
            {/* </div> */}
          </div>
        </div>
        <h1>Hello! My name is Jennifer Powell. Wecome to my portfolio page.</h1>

       
        <div className="skillsContainer"></div>

      
        <Skills />

      </div>   
      );
    }
  
  };
  
  export default (Portfolio);
