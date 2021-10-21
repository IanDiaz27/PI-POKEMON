import React from "react";
import {Link} from "react-router-dom";

import style from './Landing.module.css'

export default function Landing(){
    return(
        <div className = {style.background}>
            <h1 className = {style.title}>Poke App</h1>
            <Link to = '/home' className = {style.link}>
                <button className = {style.btn}>Ingresar</button>
            </Link>
            <span className = {style.name}>By Ian Diaz</span>
        </div>
    )
}