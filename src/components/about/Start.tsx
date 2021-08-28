import React from "react";
import { ColorContext } from "../../context/ColorContext";
import { ColorBox, ColorButton } from "../reusables/ColoredComponents";

type Props = {
  setShowStart: (b: boolean) => void,
  setShowGame: (b: boolean) => void,
  setShowProfile: (b: boolean) => void
};

const Start: React.FC<Props> = ({ setShowStart, setShowGame, setShowProfile}) => {
  const {color, changeColor} = React.useContext(ColorContext);

  return (
    <section className="content-container flex" id="start">
      <div className="layout-container text">
        <p>Hi, this is Zhu.</p>
        <ColorBox className="color-switcher" color={color} onClick={changeColor}>
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
  );
};


export default Start;
