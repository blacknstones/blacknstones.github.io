import * as React from "react";
import { ColorContext } from "../../context/ColorContext";
import { ColorFilterButton } from "../reusables/ColoredComponents";

type Level = "category" | "language" | "tool";

type Props = {
  onAddFilter: (level: Level, option: string) => void;
  onRemoveFilter: (level: Level, option: string) => void;
  level: Level;
  option: string;
  selected: string[] | undefined;
};

const FilterButton: React.FC<Props> = ({
  onAddFilter,
  onRemoveFilter,
  level,
  option,
  selected,
  children,
}) => {
  const {color} = React.useContext(ColorContext);
  const [active, setActive] = React.useState(false);

  const isSelected: boolean = selected ? selected.includes(option) : false;

  console.log(option, isSelected);

  return (
    <ColorFilterButton
      color={color}
      className="button filter-button"
      style={{ color: (active && isSelected) ? color : undefined }}
      onClick={() => {
        active ? onRemoveFilter(level, option) : onAddFilter(level, option);
        setActive(!active);
      }}
    >
      {children}
    </ColorFilterButton>
  );
};

export default FilterButton;
