import React, { Component } from "react";
import Card from "../components/Cards";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

// import VectorBackground from "../components/VectorBackground";
import ScrollingColorBackground from "react-scrolling-color-background";
class Portfolio extends Component {
  render() {
    return (
      <div>
        
        {/* <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        />
        
<section
          data-background-color='rgb(32, 202, 172)'
          className='js-color-stop'
        >Some content</section>

        <section
          data-background-color='rgb(60, 191, 246)'
          className='js-color-stop'
        >Some other content</section> */}
      
      <Nav />
      
      <Landing />


      <Skills />
      <div id="gradient" />
      <Projects />
      </div >   
      );
  }

};

export default (Portfolio);
