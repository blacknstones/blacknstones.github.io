import React, { useState } from "react";
import randomColor from "randomcolor";
//import styled from "styled-components";
import Header from "../layout/Header";
// import pointer from "../../assets/cursor1.png";
import Start from "../about/Start";


// interface IStyled {
//   color: string;
// }
// const Box = styled.p<IStyled>`
//   border: 4px solid white;
//   box-shadow: 10px 10px 0px 0px ${(props) => props.color};

//   &:hover {
//     transition: ease-in-out 0.2s;
//     border: 4px solid transparent;
//     box-shadow: none;
//     cursor: url(${pointer}), auto;
//     background-color: ${(props) => props.color};
//   }
// `;

// const StartButton = styled.button<IStyled>`
//   color: ${(props) => props.color};
//   border: 2px solid ${(props) => props.color};
//   cursor: url(${pointer}), auto;
// `;



const AboutPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [color, setColor] = useState<string>(randomColor());

  const changeColor: () => void = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setColor(randomColor());
  };

  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="about-page">
      <Header />
      <div className="content">
        {showStart && (
          <Start color={color} changeColor={changeColor} setShowStart={setShowStart} setShowGame={setShowGame} />
          // <section className="start">
          //   <div className="text">
          //     <p>Hi, I'm Yanwei Zhu.</p>

          //     <p>
          //       I'm a self-motivated web developer with a background in
          //       Sociology &amp; Gender Studies.
          //     </p>
          //     <p>
          //       I love thinking outside the box and creating out of the
          //       ordinary.
          //     </p>
          //     <Box color={color} onClick={changeColor}>
          //       Now let's play a game and get to know each other.
          //     </Box>
          //   </div>

          //   <StartButton
          //     className="button"
          //     color={color}
          //     onClick={() => {
          //       setShowStart(false);
          //       setShowGame(true);
          //     }}
          //   >
          //     start &rarr;
          //   </StartButton>
          // </section>
        )}

        {showGame && (
          <section className="about-game">
            <div className="text">
              <p>It's 3021. You live in a world where AI has taken control. </p>
              <p>
                Human can no longer live independently without machines. From
                life to death, every data produced by people is being tracked.
              </p>
              <p>
                Human consciousness is uploaded to the cloud in real-time for AI
                to consume.
              </p>
              <p>
                You, an awakening mind, together with others who resist, will
                start a revolution.
              </p>
            </div>

            <div>
              <p>Choose your strength:</p>
              <div className="cards">
                
              </div>

            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
