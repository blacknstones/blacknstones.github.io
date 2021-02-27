import React from "react";
import { ColorContext } from "../reusables/ColorContext";

// type Props = {
//     setShowFirst: (b: boolean) => void,
//     setShowSecond: (b: boolean) => void,
// };

const Intro: React.FC = () => {
  const color = React.useContext(ColorContext);
  const ColorStyle = {
    color: color,
  };

  return (
    <section className="content-container">
      <div className="layout-container text">
        <p style={ColorStyle}>Who am I?</p>

        <p>My name is Yanwei Zhu.</p>
        <p>
          I'm a self-motivated web developer who love thinking outside the box,
          using code and other medium to create visual &amp; functionality.
        </p>

      </div>
      {/* <div className="layout-container buttons">
        <button
          className="button continue-button"
          onClick={() => {
            setShowFirst(false);
            setShowSecond(true);
          }}
          style={ColorStyle}
        >
          {">>"}
        </button>
      </div> */}
    </section>
  );
};

export default Intro;
