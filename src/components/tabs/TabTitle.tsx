import React, { useCallback, useEffect, useState } from 'react';
import { ColorContext } from '../../context/ColorContext';
import { ColorTab } from '../color/ColoredComponents';

type Props = {
  title: string;
  newTitle?: string;
  icon?: string;
  newIcon?: string;
  transformType: 'clicked' | 'active';
  active: boolean;
  useColor: boolean | undefined;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({
  title,
  newTitle,
  icon,
  newIcon,
  index,
  setSelectedTab,
  transformType,
  active,
  useColor,
}) => {
  const { color } = React.useContext(ColorContext);
  const ActiveStyle = {
    backgroundColor: color,
    borderColor: color,
  };

  const [clicked, setClicked] = useState(false);

  // check the transform condition
  const transformed: boolean = transformType === 'clicked' ? clicked : active;

  const handleClick = useCallback(() => {
    setSelectedTab(index);
    setClicked(true);
  }, [setSelectedTab, index]);

  return (
    <div>
      {useColor ? (
        <ColorTab
          color={color}
          className={'tab-title ' + (active ? 'active' : '')}
          style={active ? ActiveStyle : undefined}
          onClick={handleClick}>
          <img
            className='tab-icon'
            src={transformed && newIcon ? newIcon : icon}
          />
          <p className='tab-text'>
            {transformed && newTitle ? newTitle : title}
          </p>
        </ColorTab>
      ) : (
        <div
          color={color}
          className={'tab-title ' + (active ? 'active' : '')}
          onClick={handleClick}>
          <img
            className='tab-icon'
            src={transformed && newIcon ? newIcon : icon}
          />
          <p className='tab-text'>
            {transformed && newTitle ? newTitle : title}
          </p>
        </div>
      )}
    </div>
  );
};

export default TabTitle;
