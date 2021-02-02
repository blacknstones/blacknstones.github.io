import React, { useState } from "react";
import randomColor from "randomcolor";
import Header from "../layout/Header";
import Start from "../about/Start";
import Strength from "../about/Strength";

const AboutPage: React.FC = () => {
  const [color, setColor] = useState<string>(randomColor());

  const changeColor: () => void = () => {
    setColor(randomColor());
  };

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="about-page">
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

        {showGame && (
         <Strength />
        )}
      </div>
    </div>
  );
};

export default AboutPage;
