import * as React from "react";
import { ColorContext } from "../reusables/ColorContext";

type props = {
  item: {
    title: string;
    desc: string;
  };
  showConfirm?: () => void;
};

const Card: React.FC<props> = ({ item, showConfirm }) => {
  const [fliped, setFliped] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const color = React.useContext(ColorContext);

  const handleFlip = () => {
    setFliped(true);
  };

  // add folllowing to "front"
  // onClick={() => {
  //   showConfirm();
  //   setActive(!active);
  // }}

  return (
    <li className="card" onClick={handleFlip}>
      {fliped ? (
        <div className="card-name">
            <p>{">>"}</p>
          <p
            className="front"
            onMouseEnter={() => setShowContent(true)}
            onMouseLeave={() => setShowContent(false)}
           
            style={
              active ? { color: color, textDecoration: "underline" } : undefined
            }
          >
            {item.title}
          </p>

          {showContent && <div className="tooltip" style={{borderColor: color, color: color}}>{item.desc}</div>}
        </div>
      ) : (
        <p className="back">?</p>
      )}
    </li>
  );
};

export default Card;
