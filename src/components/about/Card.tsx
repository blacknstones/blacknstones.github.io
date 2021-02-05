import * as React from "react";
import randomColor from "randomcolor";

type props = {
    title: string
}

const Card: React.FC<props> = ({title}) => {
    return (
    <div className="card" 
    style={{color: randomColor()}} 
    onClick={}>
        {title}
    </div>);
}

export default Card;