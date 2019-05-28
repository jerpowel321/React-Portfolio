import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Router>
    <Route exact path="/" component={Portfolio}/>
    </Router>
  );
}

export default App;
