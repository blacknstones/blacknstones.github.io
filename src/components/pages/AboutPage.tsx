import React, { useState } from "react";
import randomColor from "randomcolor";
import Header from "../layout/Header";
import Start from "../about/Start";
import Strength from "../about/Strength";

export const ColorContext = React.createContext(null);

const AboutPage: React.FC = () => {

  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="about-page">
      {/* <ColorContext.Provider value={color}> */}
        <Header />
        <div className="content">
          {showStart && (
            <Start
              color={color}
              changeColor={changeColor}
              setShowStart={setShowStart}
              setShowGame={setShowGame}
            />
          )}

          {showGame && <Strength />}
        </div>
      {/* </ColorContext.Provider> */}
    </div>
  );
};

export default AboutPage;
