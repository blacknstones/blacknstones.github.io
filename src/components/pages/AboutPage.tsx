import React, { useState } from "react";
import randomColor from "randomcolor";
import styled from "styled-components";
import Header from "../layout/Header";
import pointer from "../../assets/cursor1.png";

interface IStyled {
  color: string;
}
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
color: ${(props) => props.color}
`;

const AboutPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [color, setColor] = useState<string>(randomColor());

  const changeColor: () => void = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setColor(randomColor());
  };

  return (
    <div className="about-page">
      <Header />

      <section className="start">
        <div className="intro">
          <p>Hi, I'm Yanwei Zhu.</p>

          <p>
            I'm a self-motivated web developer with a background in Sociology
            &amp; Gender Studies.
          </p>
          <Box color={color} onClick={changeColor}>
            I love thinking outside the box and creating out of the ordinary.
          </Box>

          <p>Now let's play a game and get to know each other.</p>
        </div>
        <StartButton className="start-button" color={color}>start &rarr;</StartButton>
      </section>
    </div>
  );
};

export default AboutPage;
