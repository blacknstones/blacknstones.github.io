// React Core
import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import AboutPage from './components/pages/AboutPage';

import './css/style.css';
import ColorProvider from './context/ColorContext';


const App: React.FC = () => {

 /*  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color;

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

 */
  return (

    <div className="App">
      <ColorProvider>
      {/*  <ColorContext.Provider value={{color: colorRef.current, changeColor: changeColor}}> */}
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
     {/*  </ColorContext.Provider> */}

      </ColorProvider>
    </div>

  );
}

export default App;

