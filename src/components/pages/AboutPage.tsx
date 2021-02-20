import React, { useEffect, useRef, useState } from "react";
import randomColor from "randomcolor";
import Header from "../layout/Header";
import styled from "styled-components";
import pointer from "../../assets/cursor1.png";
import Profile from "../about/Profile";
import Setting from "../about/Setting";
import { ColorContext } from "../reusables/ColorContext";

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
  border: 4px solid transparent; 
  &:hover {
     border: 4px solid ${(props) => props.color};
     cursor: url(${pointer}), auto;
     transition: ease-in-out;
  }
`;

const AboutPage: React.FC = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color; 

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

// for testing if color is logged to console
useEffect(() => {
  console.log(colorRef);
},[color]);

  return (
    <div className="about-page">
      <ColorContext.Provider value={colorRef.current}>
      <Header />
      <div className="content">
        {showStart && (
          <section className="content-container" id="start">
            <div className="layout-container text">
              <p>Hi, this is Zhu.</p>
              <Box color={color} onClick={changeColor}>
                Let's play a game and get to know each other?
              </Box>
            </div>

            <div className="layout-container buttons">
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
      </ColorContext.Provider>
    </div>
  );
};

export default AboutPage;
