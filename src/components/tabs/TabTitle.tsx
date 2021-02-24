import React, { useCallback, useEffect, useState } from "react";
import { ColorContext } from "../reusables/ColorContext";

type Props = {
  title: string;
  newTitle?: string;
  icon?: string;
  newIcon?: string;
  transformType: "clicked" | "active";
  active: boolean;
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
}) => {
  const color = React.useContext(ColorContext);
  const ColorStyle = {
    color: color,
  };

  const [clicked, setClicked] = useState(false);

  // check the transform condition
  const transformed: boolean = transformType === "clicked" ? clicked : active;

  const handleClick = useCallback(() => {
    setSelectedTab(index);
    setClicked(true);
  }, [setSelectedTab, index]);

  // useEffect(() => {
  //   console.log("inside TabTitle:", title);
  //   console.log("transform type: ", transformType);
  //   console.log("active:", active);
  //   console.log("clicked:", clicked);
  // }, []);

  return (
    <li className={"tab-title " + (active ? "active" : "")}>
      <div className="tab-button" onClick={handleClick}>
        <img
          className="tab-icon"
          src={transformed && newIcon ? newIcon : icon}
        />
        <p className="tab-text" style={active ? ColorStyle : undefined}>
          {transformed && newTitle ? newTitle : title}
        </p>
      </div>
    </li>
  );
};

export default TabTitle;
