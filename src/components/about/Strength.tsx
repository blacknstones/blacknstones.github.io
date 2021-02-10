import React, { useState } from "react";
import Card from "./Card";
// import ColorContext from "../../App";

const Strength: React.FC = () => {
  //  const color = useContext(ColorContext);
  const [opened, setOpened] = useState(false);
  const [chosen, setChosen] = useState(false);

  const choices = [
    {
      title: "inquisitive",
      desc: "always curious in searching for an answer",
    },
    {
      title: "creative",
      desc: "",
    },
    {
      title: "proactive",
      desc: "",
    }
  ];

  return (
    <section className="about-game">
      <div className="story">
        <p>It's 3021, a time when AI has taken control. </p>
        <p>
          From life to death, every human being's consciousness is uploaded to
          the cloud for AI to consume.
        </p>
        <p>
          Human can no longer make indenpendent decisions, or even survive
          without machines.
        </p>
        <p>
          You, an awakening mind, with the help of your AI program Zhu, will
          find the core of being human again.
        </p>
      </div>

      {opened ? (
        <div className="choices">
          <p className="prompt">Zhu has some default settings:</p>

          <div className="cards">
            {choices.map((item) => (
              <Card item={item} chosen={chosen} />
            ))}
          </div>
        </div>
      ) : (
        <button
          className="continue-button"
          onClick={() => {
            setOpened(true);
          }}
        >
          {">>"}
        </button>
      )}
    </section>
  );
};

export default Strength;
