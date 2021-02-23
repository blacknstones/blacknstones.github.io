import React from "react";
import { ColorContext } from "../reusables/ColorContext";
import { ColorBox, ColorButton } from "../reusables/ColoredComponents";

type Props = {
  changeColor: () => void,
  setShowStart: (b: boolean) => void,
  setShowGame: (b: boolean) => void,
  setShowProfile: (b: boolean) => void
};

const Start: React.FC<Props> = ({changeColor, setShowStart, setShowGame, setShowProfile}) => {
  const color = React.useContext(ColorContext);

  return (
    <section className="content-container" id="start">
      <div className="layout-container text">
        <p>Hi, this is Zhu.</p>
        <ColorBox id="color-switcher" color={color} onClick={changeColor}>
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
