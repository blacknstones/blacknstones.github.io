import * as React from "react";
import randomColor from "randomcolor";

type props = {
  title: string;
};

const style = {
  color: randomColor(),
};

const Card: React.FC<props> = ({ title }) => {
  const [fliped, setFliped] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);

  const handleFlip = () => {
    setFliped(true);
  };

  return (
    <div className="card" onClick={handleFlip}>
      {fliped ? (
        <div>
          <p
            style={style}
            className="front"
            onMouseEnter={() => setShowContent(true)}
            onMouseLeave={() => setShowContent(false)}
          >
            {title}
          </p>
          {showContent && <div></div>}
        </div>
      ) : (
        <p className="back">?</p>
      )}
    </div>
  );
};

export default Card;
