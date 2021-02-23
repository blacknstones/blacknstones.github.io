import React, { useCallback } from 'react';

type Props = {
    title: string,
    index: number,
    setSelectedTab: (index: number) => void
  }
  
  const TabTitle: React.FC<Props> = ({ title, index, setSelectedTab}) => {

    const handleClick = useCallback( () => {
      setSelectedTab(index);
    }, [setSelectedTab, index])
  
    return (
      <li>
        <button onClick={handleClick}>{title}</button>
      </li>
    )
  }
  
  export default TabTitle;