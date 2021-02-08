import React, { useState } from "react";
import pointer from "../../assets/cursor1.png";
import Card from "./Card";

const Strength: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section className="about-game">
      <div className="text">
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
          <p className="prompt">Zhu has some settings. Choose one:</p>

          <div className="cards">
            <Card title="Inqusitive" />
            <Card title="Creative" />
            <Card title="Proactive" />
          </div>
        </div>
      ) : (
        <button
        className="continue-button"
          onClick={() => {
            setOpened(true);
          }}
        >
          &rarr;
        </button>
      )}
    </section>
  );
};

export default Strength;
