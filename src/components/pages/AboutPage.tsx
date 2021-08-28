import React, { useEffect, useRef, useState } from "react";
import randomColor from "randomcolor";
import Header from "../layout/Header";
import Profile from "../about/Profile";
import Setting from "../game/Setting";
import { ColorContext } from "../../context/ColorContext";
import Start from "../about/Start";
import TempGame from "../game/TempGame";
import { useContext } from "react";

const AboutPage: React.FC = () => {
  const {color, changeColor} = useContext(ColorContext);
  /* const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color;

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };
 */
  //const [showStart, setShowStart] = useState(true);
  //const [showGame, setShowGame] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="about-page">
      <Header />
      {/* <ColorContext.Provider value={colorRef.current}> */}
        
        <main className="content">

{/*           {showStart && (
           <Start changeColor={changeColor} 
           setShowStart={setShowStart} 
           setShowGame={setShowGame} 
           setShowProfile={setShowProfile}/>
          )} */}

          {/* {showGame && <Setting />} */}
          {/* {showGame && <TempGame />} */}

          <Profile/>
        </main>
        
    {/*   </ColorContext.Provider> */}
    </div>
  );
};

export default AboutPage;
