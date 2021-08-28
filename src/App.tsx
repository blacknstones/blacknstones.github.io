// React Core
import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import AboutPage from './components/pages/AboutPage';

import './css/style.css';
import ColorProvider from './context/ColorContext';


const App: React.FC = () => {

  return (
    <div className="App">
      <ColorProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </Router>

      </ColorProvider>
    </div>

  );
}

export default App;

