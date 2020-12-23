// React Core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import AboutPage from './components/pages/AboutPage';

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

