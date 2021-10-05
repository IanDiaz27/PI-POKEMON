import React from "react";

const Card = ({name, img, types}) => {
    return(
        <div>
            <h2>{name}</h2>
            <h4>{types}</h4>
            <img src={img}/>
        </div>
    )
}
export default Card