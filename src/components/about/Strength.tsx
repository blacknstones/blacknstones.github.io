import React, { useState } from "react";
import pointer from "../../assets/cursor1.png";
import Card from "./Card";

const Strength: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section className="about-game">
      <div className="text">
        <p>It's 3021. A time when AI has taken control. </p>
        <p>
          Human can no longer live or make decisions independently without
          machines.
        </p>
        <p>
          From life to death, every human's consciousness is uploaded to the
          cloud in real-time for AI to consume.
        </p>
        <p>You, an awakening mind, will start the resistance with the help of your AI friend Zhu.</p>
        <p>&rarr;</p>
      </div>

      

      <div className="choices">
        <p className="prompt">Zhu has some pre-defined setting. Choose one:</p>

        <div className="cards">
           <Card title="Inqusitive"/>
           <Card title="Creative" />
           <Card title="Proactive"/>
        </div>
      </div>
    </section>
  );
};

export default Strength;
