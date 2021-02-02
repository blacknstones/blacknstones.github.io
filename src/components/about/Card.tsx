import * as React from "react";
import randomColor from "randomcolor";

type props = {
    title: string
}

const Card: React.FC<props> = ({title}) => {
    return (
    <div style={{color: randomColor()}}>
        {title}
    </div>);
}

export default Card;