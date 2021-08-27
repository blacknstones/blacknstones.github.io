// React Core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import AboutPage from './components/pages/AboutPage';

import './css/style.css';
/* import TempAbout from './components/pages/TempAbout';
import TempProject from './components/pages/TempProject'; */

const App: React.FC = () => {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectPage />
                {/* < TempProject /> */}
          </Route>
          <Route path="/about">
            <AboutPage />
            {/* < TempAbout/> */}
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

