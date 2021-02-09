import React from "react";
import styled from "styled-components";
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
  color: ${(props) => props.color};
  border: 4px solid ${(props) => props.color};
  cursor: url(${pointer}), auto;
`;

type StartProps = {
  color: string;
  changeColor: () => void;
  setShowStart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowGame: React.Dispatch<React.SetStateAction<boolean>>;
};

const Start: React.FC<StartProps> = ({
  color,
  changeColor,
  setShowStart,
  setShowGame,
}) => {
  return (
    <section className="start">
      <div className="text">
        <p>Hi, I'm Yanwei Zhu.</p>

        <p>
          I'm a self-motivated web developer with a background in Sociology
          &amp; Gender Studies.
        </p>
        <p>I love thinking outside the box and creating out of the ordinary.</p>
        <Box color={color} onClick={changeColor}>
          Now let's play a game and get to know each other.
        </Box>
      </div>

      <StartButton
        className="button"
        color={color}
        onClick={() => {
          setShowStart(false);
          setShowGame(true);
        }}
      >
        start{'>>'}
      </StartButton>
    </section>
  );
};

export default Start;
