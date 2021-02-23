import React from 'react'

type Props = {
  title: string
}

// A placeholder for rendering the children
const Tab: React.FC<Props> = ({ children }) => {
  return (
  <div>{children}</div>
  );
}

export default Tab;