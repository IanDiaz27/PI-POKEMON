import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";

import style from './Detail.module.css'
import imagen from './pokemon-silueta.png'

const Detail = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const poke = useSelector((state) => state.detail)
    let tipos
    if(poke.tipos){
        tipos = poke.tipos.map(e => e.name + ' ')
    }

    return(
        <div className = {style.conteiner} key={poke.id}>
            {
                <div className = {style.subconteiner}>
                    <h1>{poke.name}</h1>
                    <div className = {style.photo}>
                        <img src={poke.img ? poke.img : imagen} className = {style.img}/>
                    </div>
                    <h2>{poke.types ? poke.types : tipos}</h2>
                    <div>
                        <div className = {style.points}>
                            <h2>Hp:</h2>
                            <h2>{poke.hp}</h2>
                        </div>
                        <div className = {style.points}>
                            <h2>Att:</h2>
                            <h2>{poke.attack}</h2>
                        </div>
                    </div>
                    <div>
                        <div className = {style.points}>
                            <h2>Def:</h2>
                            <h2>{poke.defense}</h2>
                        </div>
                        <div className = {style.points}>
                            <h2>Speed:</h2>
                            <h2>{poke.speed}</h2>
                        </div>
                    </div>
                    <div>
                        <div className = {style.points}>
                            <h2>Att.Esp:</h2>
                            <h2>{poke.specialAttack ? poke.specialAttack : '?'}</h2>
                        </div>
                        <div className = {style.points}>
                            <h2>Def.Esp:</h2>
                            <h2>{poke.specialDefense ? poke.specialDefense : '?'}</h2>
                        </div>
                    </div>
                    <div>
                        <div className = {style.points}>
                            <h2>Weight:</h2>
                            <h2>{poke.weight}</h2>
                        </div>
                        <div className = {style.points}>
                            <h2>Height:</h2>
                            <h2>{poke.height}</h2>
                        </div>
                    </div>
                </div> 
            }
        </div>
    )
}

export default Detail