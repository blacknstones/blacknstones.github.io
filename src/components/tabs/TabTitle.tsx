import React, { useCallback, useState } from 'react';
import FullHeart from '../../assets/heart5.png';

type Props = {
    title: string,
    index: number,
    setSelectedTab: (index: number) => void
  }
  
  const TabTitle: React.FC<Props> = ({ title, index, setSelectedTab}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = useCallback( () => {
      setSelectedTab(index);
      setClicked(true);
    }, [setSelectedTab, index])
  
    return (
      <li className="tab-title">
        <button className="button" onClick={handleClick}><img src={clicked ? FullHeart : title}/></button>
      </li>
    )
  }
  
  export default TabTitle;