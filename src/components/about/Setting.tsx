import React, { useContext, useState } from "react";
import Card from "./Card";
import Input from "./Input";
import { ColorContext }  from "../reusables/ColorContext";


const Setting: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const color = useContext(ColorContext);

  const style = {
    color : color,
    ':hover': {
      color: "white"
    }
  }

  const choices = [
    {
      title: "inquisitive",
      desc: "always ask questions and look for answers",
    },
    {
      title: "creative",
      desc: "find new ways to solve problem",
    },
    {
      title: "proactive",
      desc: "transform thoughts into action",
    },
  ];

  const showConfirm = () => {
    setChosen(true);
  };

  return (
    <div>
      { showNext ? <Input /> : 
      <section className="content-container" id="setting">
      <div className="layout-container story">
        <p>It's 3021, a time when AI has taken control. </p>
        <p>
          From life to death, every human being's consciousness is uploaded to
          the cloud for AI to consume.
        </p>
        <p>
          Human can no longer make indenpendent decisions or survive
          without machines.
        </p>
        <p>
          You, an awakening mind, with the help of your AI program Zhu, will
          find the core of being human again.
        </p>
      </div>

      <div className="layout-container play">
        {opened ? (
          <div className="choices">
            <div className="prompt">
              <p style={{color: color}}>Zhu has some default settings. Choose yours: </p>
            </div>

            <ul className="cards">
              {choices.map((item) => (
                <Card item={item} showConfirm={showConfirm} />
              ))}
            </ul>
          </div>
        ) : (
          <button
            className="button continue-button"
            onClick={() => {
              setOpened(true);
            }} 
            style={style}
          >
            {">>"}
          </button>
        )}
        {chosen ? <button className="button confirm-button" 
        onClick={() => setShowNext(true)}>Confirm</button> : null}
      </div>
    </section>}
    </div>


    
    
  );
};

export default Setting;
