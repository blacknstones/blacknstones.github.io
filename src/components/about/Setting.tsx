import React, { useContext, useState } from "react";
import Card from "./Card";
import { ColorContext }  from "../reusables/ColorContext";
// inline style tool
import Radium from 'radium';

const Setting: React.FC = () => {
  //  const color = useContext(ColorContext);
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
      desc: "take initiative and make action happen",
    },
  ];

  const showConfirm = () => {
    setChosen(true);
  };

  return (
    <div>
      { showNext ? <div>This is next page</div> : 
      <section className="setting">
      <div className="story">
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

      <div className="play">
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
            className="continue-button"
            onClick={() => {
              setOpened(true);
            }} 
            style={style}
          >
            {">>"}
          </button>
        )}
        {chosen ? <button className="confirm-button" 
        onClick={() => setShowNext(true)}>Confirm</button> : null}
      </div>
    </section>}
    </div>


    
    
  );
};

export default Setting;
