import React from 'react'
import { createContext } from 'react'
import randomColor from "randomcolor";
import { useState } from 'react';

type testProps = {
    test: string,
    changeTest: () => void
}

//const initialColor = randomColor();

/* const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };
 */

const TestContext = createContext<testProps | undefined>(undefined);

const TestProvider = ({children}:any) => {

    const [test, setTest] = useState<string>(randomColor());
    const changeTest: () => void = () => 
        setTest(randomColor());
    return (
       <TestContext.Provider value={{test, changeTest}}>
           {children}
       </TestContext.Provider>
    )
}

export default TestProvider;
