import React from 'react';
import './App.css';
import Messenger from "./Messenger";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Messenger/" exact component={Messenger} />  
        <Route path="/Messenger/:userId" component={Messenger} />  
        </Switch>
      </div>
    </Router>

  );
}

export default App;
