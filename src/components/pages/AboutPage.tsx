import React, { useEffect, useRef, useState } from "react";
import randomColor from "randomcolor";
import Header from "../layout/Header";
import Profile from "../about/Profile";
import Setting from "../about/Setting";
import { ColorContext } from "../reusables/ColorContext";
import { ColorBox, ColorButton } from "../reusables/ColoredComponents";
import { Link, useRouteMatch } from "react-router-dom";

const AboutPage: React.FC = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color;

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  const { url } = useRouteMatch();

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // for testing if color is logged to console
  useEffect(() => {
    console.log(colorRef);
  }, [color]);

  return (
    <div className="about-page">
      <ColorContext.Provider value={colorRef.current}>
        <Header />
        <div className="content">
          {showStart && (
            <section className="content-container" id="start">
              <div className="layout-container text">
                <p>Hi, this is Zhu.</p>
                <ColorBox color={color} onClick={changeColor}>
                  Let's play a game and get to know each other?
                </ColorBox>
              </div>

              <div className="layout-container buttons">
                <ColorButton
                  className="button"
                  color={color}
                  onClick={() => {
                    setShowStart(false);
                    setShowGame(true);
                  }}
                >
                  start{">>"}
                </ColorButton>

                <ColorButton
                  className="button"
                  color={color}
                  onClick={() => {
                    setShowStart(false);
                    setShowProfile(true);
                  }}
                >
                  skip{">>"}
                </ColorButton>
              </div>
            </section>
          )}

          {showGame && <Setting />}
          {showProfile && <Profile />}
        </div>
      </ColorContext.Provider>
    </div>
  );
};

export default AboutPage;
