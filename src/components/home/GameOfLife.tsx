/* eslint-disable prefer-const */
import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import produce from "immer";
import preset from "../../data/preset.json";
import useOnClickOutside from "../reusables/useOnClickOurside";
import controlButton from "../../assets/mobius.png";

// type ruleOptions = "life" | "brain";
interface ICellStyled {
  isAlive: boolean;
}

const rowsLength = 40;
const colsLength = 20;

const Cell = styled.div<ICellStyled>`
  width: calc(90vw / 40);
  height: calc(90vw / 40);
  max-width: calc(1024px / 40);
  max-height: calc(1024px / 40);
  background: ${(props) => (props.isAlive ? "white" : "black")};
  border: 1px solid transparent;
`;

const generateGrid = (option: "empty" | "random"): number[][] => {
  let emptyGrid: number[][] = [];
  for (let x = 0; x < rowsLength; x++) {
    emptyGrid[x] = [];
    for (let y = 0; y < colsLength; y++) {
      emptyGrid[x][y] = option === "empty" ? 0 : Math.round(Math.random());
    }
  }
  return emptyGrid;
};

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState(
    preset
    // Uncomment below to set initial grid to empty
    //   () => {
    //   return generateEmptyGrid();
    // }
  );

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;


  const initialInteral = 50;
  const [interval, setInterval] = useState<number>(initialInteral);
  const intervalRef = useRef(interval);
  intervalRef.current = interval;

  //const [rule, setRule] = useState<ruleOptions>("life");

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const clickRef = React.useRef(null);

  const handleClickOutside = () => {
    setMenuIsOpen(false);
    console.log("clicked outside");
  };

  useOnClickOutside(clickRef, handleClickOutside);

  // use immer to mutate grid state
  const handleCellClick = (x: number, y: number) => {
    // setGrid(grid => {
    //   let newGrid = grid;
    //   newGrid[x][y] = grid[x][y] ? 0 : 1;
    //   return newGrid;
    // });

    let newGrid = produce(grid, (draftGrid) => {
      draftGrid[x][y] = grid[x][y] ? 0 : 1;
    });
    setGrid(newGrid);
    console.log("clicked");
    console.table(JSON.stringify(grid));
  };

  const countNeighbors = (grid: number[][], x: number, y: number): number => {
    let count = 0;
    // iterate neighbor cells
    for (let i of [-1, 0, 1]) {
      for (let j of [-1, 0, 1]) {
        // ignore edge cells
        if (
          x + i >= 0 &&
          x + i < rowsLength &&
          y + j >= 0 &&
          y + j < colsLength
        ) {
          count += grid[x + i][y + j];
        }
      }
    }
    // subtract the cell itself
    count -= grid[x][y];
    return count;
  };

  // useCallback hook to avoid creating a new function in every re-render
  const runIteration = useCallback(() => {
    console.log("isRunning: ", isRunning);
    console.log("runningRef", runningRef);
    console.log("intervalRef:", intervalRef);
    // useRef hook to grab the current isRunning state
    if (!runningRef.current) {
      return;
    }

    setGrid((grid) =>
      produce(grid, (draftGrid) => {
        for (let i = 0; i < rowsLength; i++) {
          for (let j = 0; j < colsLength; j++) {
            let neighbors = countNeighbors(grid, i, j);
            // rule for generating next cell state
            if (neighbors < 2 || neighbors > 3) {
              draftGrid[i][j] = 0;
            } else if (grid[i][j] === 0 && neighbors === 3) {
              draftGrid[i][j] = 1;
            }
          }
        }
      })
    );
    const speed = intervalRef.current;
    setTimeout(runIteration, speed);
  }, [isRunning]);

  return (
    <div className="game">
      <div className="grid-wrapper">
        {grid.map((rows, x) => {
          return (
            <div className="cols-wrapper" key={x}>
              {rows.map((cols, y) => (
                <Cell
                  className="cell"
                  key={`${x}, ${y}`}
                  onClick={() => {
                    handleCellClick(x, y);
                  }}
                  isAlive={grid[x][y] ? true : false}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div className="game-menu" ref={clickRef}>
        <button
          className="menu-button"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
          onMouseEnter={() => setMenuIsOpen(true)}
        >
          <img src={controlButton} />
        </button>

        {menuIsOpen && (
          <div className="toggle">
            <a className="intro" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Game of Life</a>
            <div className="actions">
              <button
                id="run-button"
                onClick={() => {
                  setIsRunning(!isRunning);
                  if (!isRunning) {
                    runningRef.current = true;
                    runIteration();
                  }
                }}
              >
                {isRunning ? "Stop" : "Run"}
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setGrid(preset);
                  // eslint-disable-next-line @typescript-eslint/no-implied-eval
                  setInterval(initialInteral);
                }}
              >
                Reset
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setGrid(generateGrid("random"));
                }}
              >
                Random
              </button>

              <button onClick={() => setGrid(generateGrid("empty"))}>
                Clear
              </button>

              <button
                className="speed-button"
                onClick={() => {
                  setInterval((interval) => interval + 50);
                  console.log(interval);
                }}
              >
                −
              </button>

              <p className="speed-button">Speed</p>
              <button
                className="speed-button"
                onClick={() => {
                  interval >= 100
                    ? setInterval((interval) => interval - 50)
                    : interval >= 20
                    ? setInterval((interval) => interval - 10)
                    : // eslint-disable-next-line @typescript-eslint/no-implied-eval
                      setInterval(10);
                  console.log(interval);
                }}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
