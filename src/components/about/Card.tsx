import * as React from "react";
import randomColor from "randomcolor";

type props = {
    title: string
}

const style = {
    color: randomColor(),
    border: '5px solid pink',
}

const Card: React.FC<props> = ({title}) => {

    const [fliped, setFliped] = React.useState(false);
    const handleFlip = () => {
        setFliped(true);
    }

    return (
    <div className="card" 
    style={style} 
    onClick={handleFlip}>
        {fliped ?  
        <p className="front">{title}</p> : 
        <p className="back">?</p>}
        
    </div>);
}

export default Card;