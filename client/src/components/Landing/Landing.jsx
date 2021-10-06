import React from "react";
import {Link} from "react-router-dom";

import style from './Landing.module.css'

export default function Landing(){
    return(
        <div className = {style.background}>
            <h1>Pagina Pokemon</h1>
            <Link to = '/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}