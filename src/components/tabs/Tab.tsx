import React from 'react'

interface Props {
  title: string; 
  newTitle?: string;
  icon?: string;
  newIcon?: string; 
}

// A placeholder for rendering the children
const Tab: React.FC<Props> = ({ children }) => {
  return (
  <div>{children}</div>
  );
}

export default Tab;