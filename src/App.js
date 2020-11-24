
import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login"
import Hostleader from "./components/hostleader/Hostleader"
import Leaderboard from "./components/hostleader/Leaderboard"
import Rightans from "./components/answer-status/Rightans"
import Wrongans from "./components/answer-status/Wrongans"
import Quiz from "./components/quiz-section/Quiz"


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/hostleader" exact component={Hostleader} />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route path="/rightans" exact component={Rightans} />
            <Route path="/wrongans" exact component={Wrongans} />
            <Route path="/quiz" exact component={Quiz} />





          </Switch>
        </Router>
      </div>

    );
  }
}



export default App;
