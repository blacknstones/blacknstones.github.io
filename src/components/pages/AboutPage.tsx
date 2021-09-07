import React, { useEffect, useRef, useState } from 'react';
import randomColor from 'randomcolor';
import Header from '../layout/Header';
import Profile from '../about/Profile';
import Setting from '../game/Setting';
import { ColorContext } from '../../context/ColorContext';
import Start from '../about/Start';
import TempGame from '../game/TempGame';
import { useContext } from 'react';
import ColorSwitcher from '../color/ColorSwitcher';

const AboutPage: React.FC = () => {
  const { color, changeColor } = useContext(ColorContext);
  //const [showStart, setShowStart] = useState(true);
  //const [showGame, setShowGame] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);

  return (
    <div className='about-page'>
      <Header />
      <main className='content'>
        <section className='content-container'>
          <ColorSwitcher />
          <Profile />
        </section>

        {/*           {showStart && (
           <Start changeColor={changeColor} 
           setShowStart={setShowStart} 
           setShowGame={setShowGame} 
           setShowProfile={setShowProfile}/>
          )} */}

        {/* {showGame && <Setting />} */}
        {/* {showGame && <TempGame />} */}
      </main>
    </div>
  );
};

export default AboutPage;
