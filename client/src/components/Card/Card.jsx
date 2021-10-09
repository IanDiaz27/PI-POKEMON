import React from "react";

import style from './Card.module.css'
import imagen from './pokemon-silueta.png'

const Card = ({name, img, types}) => {
    return(
        <div className = {style.card}>
            <img src={img ? img : imagen} className = {style.img}/>
            <div className={style.name}>
                <h2>{name}</h2>
                <h5>{types}</h5>
            </div>
        </div>
    )
}
export default Card