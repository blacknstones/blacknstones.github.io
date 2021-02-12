import React, { useState } from "react";
import Card from "./Card";
// import ColorContext from "../../App";

const Strength: React.FC = () => {
  //  const color = useContext(ColorContext);
  const [opened, setOpened] = useState(false);
  const [chosen, setChosen] = useState(false);

  const choices = [
    {
      title: ">> inquisitive",
      desc: "always ask questions and look for answers",
    },
    {
      title: ">> creative",
      desc: "solve problem in a different way",
    },
    {
      title: ">> proactive",
      desc: "put thoughts into action",
    },
  ];

  const showConfirm = () => {
    setChosen(true);
  };

  return (
    <section className="strength">
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

      <div className="play">
        {opened ? (
          <div className="choices">
            <div className="prompt">
              <p>Zhu has some default settings. Choose the ones you want: </p>
            </div>

            <ul className="cards">
              {choices.map((item) => (
                <Card item={item} showConfirm={showConfirm} />
              ))}
            </ul>
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
        {chosen ? <button className="confirm-button">Confirm</button> : null}
      </div>
    </section>
  );
};

export default Strength;
