import React, { useState } from "react";
import randomColor from "randomcolor";
import Header from "../layout/Header";
import setting from "../about/Setting";
import styled from "styled-components";
import pointer from "../../assets/cursor1.png";
import Profile from "../about/Profile";
import Setting from "../about/Setting";

export const ColorContext = React.createContext(null);

interface IStyled {
  color: string;
}

// styled-component
const Box = styled.p<IStyled>`
  border: 4px solid white;
  box-shadow: 10px 10px 0px 0px ${(props) => props.color};

  &:hover {
    transition: ease-in-out 0.2s;
    border: 4px solid transparent;
    box-shadow: none;
    cursor: url(${pointer}), auto;
    background-color: ${(props) => props.color};
  }
`;

const StartButton = styled.button<IStyled>`
  color: ${(props) => props.color};
  border: 4px solid ${(props) => props.color};
  cursor: url(${pointer}), auto;
`;

const AboutPage: React.FC = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // const [showStart, setShowStart] = useState(true);
  // const [showGame, setShowGame] = useState(false);

  return (
    <div className="about-page">
      {/* <ColorContext.Provider value={color}> */}
      <Header />
      <div className="content">
        {showStart && (
          <section className="start">
            <div className="text">
              <p>Hi, I'm Yanwei Zhu.</p>

              <p>
                I'm a self-motivated web developer with a background in
                Sociology &amp; Gender Studies.
              </p>
              <p>
                I love thinking outside the box and creating out of the
                ordinary.
              </p>
              <Box color={color} onClick={changeColor}>
                Let's play a game and get to know each other?
              </Box>
            </div>

            <div className="buttons">
              <StartButton
                className="button"
                color={color}
                onClick={() => {
                  setShowStart(false);
                  setShowGame(true);
                }}
              >
                start{">>"}
              </StartButton>

              <StartButton
                className="button"
                color={color}
                onClick={() => {
                  setShowStart(false);
                  setShowProfile(true);
                }}
              >
                skip{">>"}
              </StartButton>
            </div>
          </section>
        )}

        {showGame && <Setting />}
        {showProfile && <Profile />}
      </div>
      {/* </ColorContext.Provider> */}
    </div>
  );
};

export default AboutPage;
