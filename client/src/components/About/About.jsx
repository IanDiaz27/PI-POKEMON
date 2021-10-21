import React from "react";
import {Link} from 'react-router-dom'

import style from "./About.module.css"

const About = () => {
    return(
        <div className = {style.about}>
            <div className = {style.head}>
                <Link to = '/home'>
                    <button className={style.home}>Home</button>
                </Link>
                <h1 className = {style.hw}>🙋‍♂️Hola Mundo!</h1>
            </div>
            <h2 className = {style.title}>🚀Minombre es Ian Diaz :</h2>
            <div className = {style.txt}>
                <p className = {style.p}>Soy Full Stack Developer </p>
                <p className = {style.p}>Esta fue mi proyecto individual, realizada durante el bootcamp de SoyHenry.</p>
                <p className = {style.p}>Este proyecto se realizo principalmente para reforzar nuestros conocimientos como full stack developers y toda la info fue extraida de PokeAPI.</p>
                <p className = {style.p}>Las tecnologias utilizadas fueron:</p>
                <ul className = {style.ul}>
                    <li>React JS</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                    <li>Node JS</li>
                    <li>CSS</li>
                    <li>Java Script</li>
                </ul>

            </div>
            <div className = {style.info}>
                <div>
                <a href='https://www.linkedin.com/in/iandiaz-dev/'><p className = {style.p}>Linkedin:  Ian Diaz</p></a>
                </div>
                <div>
                <a href='https://github.com/IanDiaz27'><p className = {style.p}>Git Hub:  IanDiaz27</p></a>
                </div>
            </div>
        </div>
    )
}

export default About