import React, { useState } from "react";
import randomColor from "randomcolor";
import styled from "styled-components";
import Header from "../layout/Header";

interface IBoxStyled {
  color: string;
}
const Box = styled.div<IBoxStyled>`
  border: 4px solid white;
  box-shadow: 10px 10px 0px 0px ${(props) => props.color};

  &:hover {
    transition: ease-in-out 0.2s;
    border: 4px solid transparent;
    box-shadow: none;
    cursor: pointer;
    background-color: ${(props) => props.color};
  }
`;

const AboutPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [color, setColor] = useState<string>(randomColor());

  const changeColor: () => void = () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      setColor(randomColor());
  }

  return (
    <div className="about-page">
      <Header />

      <main className="about">
        <h2 className="name">Hi, I'm Yanwei Zhu.</h2>

        <p className="background">
          I'm a MSc graduate in Sociology and Gender Studies, and a
          self-motivated programmer.
        </p>
        <Box className="create" color={color} onClick={changeColor}>
          I love thinking outside the box and creating out of the ordinary.
        </Box>
      </main>
    </div>
  );
};

export default AboutPage;
