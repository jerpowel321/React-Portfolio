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
     
       <Landing/>
       
        
        <Skills />
        <div id="gradient"/>
        <Projects />
      </div>   
      );
    }
  
  };
  
  export default (Portfolio);
