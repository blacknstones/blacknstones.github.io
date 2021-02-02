import React from "react";
import pointer from "../../assets/cursor1.png";
import Card from "./Card";

const Strength: React.FC = () => {
  return (
    <section className="about-game">
      <div className="text">
        <p>It's 3021. You live in a time when AI has taken control. </p>
        <p>
          Human can no longer live independently or make decisions without
          machines.
        </p>
        <p>
          From life to death, every human's consciousness is uploaded to the
          cloud in real-time for AI to consume.
        </p>
        <p>You, an awakening mind, will start the resistance with the help of your friend Zhu.</p>
      </div>

      <div>
        <p>Choose one Strength shared by Zhu:</p>

        <div className="cards">
           <Card title="Inqusitive"/>
           <Card title="Creative" />
           <Card title=""/>
        </div>
      </div>
    </section>
  );
};

export default Strength;
