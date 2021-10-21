import React from "react";
import gif from './pikachu.gif'

import style from './Loading.module.css'

const Loading = () => {
    return(
        <div className = {style.load}>
            <img src = {gif} className = {style.gif}/>
            <h3>Cargando...</h3>
        </div>
    )
}

export default Loading