import * as React from 'react';


  type Props = {
    onAddFilter: (level: string, option: string) => void;
    onRemoveFilter: (level: string, option: string) => void;
    level: "category" | "language" | "tool";
    option: string;
}

const FilterButton: React.FC<Props> = ({ onAddFilter, onRemoveFilter, level, option, children}) => {
    const [active, setActive] = React.useState(false);

    return(
    <button onClick={()=> {
        setActive(!active);
        active ? onAddFilter(level, option) : onRemoveFilter(level, option);
    }} >
        {children}
    </button>
        );
}

export default FilterButton;