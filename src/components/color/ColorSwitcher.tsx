import React, { useContext, useState } from 'react'
import { ColorContext } from '../../context/ColorContext';
import { ColorButton } from './ColoredComponents'

const ColorSwitcher: React.FC = () => {
    const {color, changeColor} =useContext(ColorContext);
    const [hover, setHover] = useState(false);
    return (
        <div className="full-layout-container">
              <ColorButton
                id="color-switcher"
                color={color}
                onClick={changeColor}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="flex">
                  <i className="fas fa-circle"></i>
                  <p className="color-name">{hover ? color : "Switch color"}</p>
                </div>
              </ColorButton>
            </div>
    )
}

export default ColorSwitcher;
