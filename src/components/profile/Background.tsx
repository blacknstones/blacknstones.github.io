import React from 'react';
import { ColorContext } from '../../context/ColorContext';
import { ColorBox } from '../reusables/ColoredComponents';
import Tab from '../tabs/Tab';
import Tabs from '../tabs/Tabs';
import Heart from "../../assets/heart1.png";
import FullHeart from '../../assets/heart5.png';
import Journey from './Journey';

type Props = {
    setShowFirst: (b: boolean) => void,
    setShowSecond: (b: boolean) => void,
};

const Background:  React.FC<Props> = ({setShowFirst, setShowSecond}) => {
    const {color} = React.useContext(ColorContext);
    const ColorStyle = {
      color: color,
    };
    return (
        <section className="content-container">
          <div className="layout-container text">
            <p style={ColorStyle}>How did I get here?</p>
            <p>
              By experimenting, self-motivating and constant learning, I
              transformed myself from a social science researcher to a web
              developer.
            </p>

           <Journey />

          </div>
          <div className="layout-container buttons">
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
          </div>
        </section>
    );
}

export default Background;