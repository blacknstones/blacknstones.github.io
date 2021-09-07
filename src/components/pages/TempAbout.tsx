import React, { useEffect, useRef, useState } from 'react';
import randomColor from 'randomcolor';
import Header from '../layout/Header';
import styled from 'styled-components';
import pointer from '../../assets/cursor1.png';
import Profile from '../about/Profile';
import Setting from '../game/Setting';
import { ColorContext } from '../../context/ColorContext';
import { useContext } from 'react';

interface IStyled {
  color: string;
}

// styled-component
const Box = styled.p<IStyled>`
  border: 4px solid white;
  box-shadow: 10px 10px 0px 0px ${props => props.color};

  &:hover {
    transition: ease-in-out 0.2s;
    border: 4px solid transparent;
    box-shadow: none;
    cursor: url(${pointer}), auto;
    background-color: ${props => props.color};
  }
`;

const StartButton = styled.button<IStyled>`
  color: ${props => props.color};
  border: 4px solid transparent;
  &:hover {
    border: 4px solid ${props => props.color};
    cursor: url(${pointer}), auto;
    transition: ease-in-out;
  }
`;

const TempAbout: React.FC = () => {
  /*   const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color; 

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  }; */
  const { color, changeColor } = useContext(ColorContext);

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className='about-page'>
      {/* <ColorContext.Provider value={colorRef.current}> */}
      <Header />
      <div className='content'>
        {showStart && (
          <section className='start'>
            <div className='text'>
              <p>Hi, I'm Yanwei Zhu.</p>

              <p>
                I'm a self-motivated web developer with a background in
                Sociology &amp; Gender Studies.
              </p>

              <Box color={color} onClick={changeColor}>
                I love thinking outside the box and creating out of the
                ordinary.
              </Box>
            </div>
          </section>
        )}
      </div>
      {/* </ColorContext.Provider> */}
    </div>
  );
};

export default TempAbout;
