import * as React from "react";
import randomColor from "randomcolor";

type props = {
  item : {
    title: string,
    desc: string
  }; 
  chosen: boolean;
};

const Card: React.FC<props> = ({ item, chosen }) => {
  const [fliped, setFliped] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleFlip = () => {
    setFliped(true);
  };

  return (
    <div className="card" onClick={handleFlip}>
      {fliped ? (
        <div>
          <p
            className="front"
            onMouseEnter={() => setShowContent(true)}
            onMouseLeave={() => setShowContent(false)} 
          >
            {item.title}
          </p>
          {showContent && <div className="tooltip">{item.desc}</div>}
        </div>
      ) : (
        <p className="back">?</p>
      )}
    </div>
  );
};

export default Card;
