// React Core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/templates/HomePage';
import ProjectPage from './components/templates/ProjectPage';
import AboutPage from './components/templates/AboutPage';

import './css/style.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectPage/>
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

