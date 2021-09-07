import React, { useState } from 'react';

interface ILink {
  item: {
    icon: string;
    title: string;
    hoverTitle: string;
    link: string;
  };
}

const LinkItem: React.FC<ILink> = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <li>
      <a
        className='social-link'
        href={item.link}
        target='_blank'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <img src={item.icon} className='icon' />
        <p>{hover ? item.hoverTitle : item.title}</p>
      </a>
    </li>
  );
};

export default LinkItem;
