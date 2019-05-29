import React, { Component } from "react";
import Card from "../components/Cards";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
// import VectorBackground from "../components/VectorBackground";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {/* <VectorBackground /> */}
       <Landing/>
        {/* <div className="container">
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
        </div> */}
        
        <Skills />
        <Projects />
      </div>   
      );
    }
  
  };
  
  export default (Portfolio);
