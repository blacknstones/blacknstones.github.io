import React, {createContext, useState, useRef} from 'react';
import randomColor from "randomcolor";

type ColorProps = {
    color: string,
    changeColor: () => void
}

type Props = {
  children: React.ReactNode
};

const initialValue = {
  color: '',
  changeColor: () => {}
}



export const ColorContext = createContext<ColorProps>(initialValue);

const ColorProvider = ({children} : Props) => {

    const [color, setColor] = useState<string>(randomColor());
    const colorRef = useRef(color);
  colorRef.current = color;
  const changeColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };
    return (
       <ColorContext.Provider value={{color: colorRef.current, changeColor}}>
           {children}
       </ColorContext.Provider>
    )
}

export default ColorProvider;