import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";

import style from './Create.module.css'

const validate = (input) => {
    let errors = {};
    if(!input.name){
        errors.name = 'Se requiere un Nombre'
    }
    if(!input.hp || !parseInt(input.hp) || parseInt(input.hp) < 0){
        errors.hp = 'Se requiere hp, debe ser un numero y positivo'
    }
    if(!input.attack || !parseInt(input.attack)){
        errors.attack = 'Se requiere ataque y debe ser un numero'
    }
    if(!input.defense || !parseInt(input.defense)){
        errors.defense = 'Se requiere un defensa y debe ser un numero'
    }
    if(!input.speed || !parseInt(input.speed)){
        errors.speed = 'Se requiere un velocidad y debe ser un numero'
    }
    if(!input.height || !parseInt(input.height)){
        errors.height = 'Se requiere un altura y debe ser un numero'
    }
    if(!input.weight || !parseInt(input.weight)){
        errors.weight = 'Se requiere un peso y debe ser un numero'
    }
    return errors;
}

const Create = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: []
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        if(errors.name || errors.hp || errors.attack || errors.defense || errors.speed || errors.height || errors.weight || input.types.length === 0){
            alert('Hay campos sin completar')
        } else {
            dispatch(postPokemon(input))
            alert('Pokemon creado exitosamente')
            setInput({
                name: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                img: '',
                types: []
            })
            history.push('/home')
        }
    }

    return(
        <div>
            <Link to = '/home'>
                <button className={style.home}>Home</button>
            </Link>
            <div className={style.conteiner}>
                    <h1 className={style.title}>Crea tu Pokemon</h1>
                    <form onSubmit = {(e) => handleSubmit(e)}>
                        <div>
                                <div className={style.name}>
                                <label>Nombre:</label>
                                <input type='text'
                                value = {input.name}
                                name = 'name'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.name && (
                                <p className='error'>{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <div  className={style.name}>
                                <label>hp:</label>
                                <input type='text'
                                value = {input.hp}
                                name = 'hp'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.hp && (
                                <p className='error'>{errors.hp}</p>
                            )}
                        </div>
                        <div>
                            <div  className={style.name}>
                                <label>Ataque:</label>
                                <input type='text'
                                value = {input.attack}
                                name = 'attack'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.attack && (
                                <p className='error'>{errors.attack}</p>
                            )}
                        </div>
                        <div>
                            <div  className={style.name}>
                                <label>Defensa:</label>
                                <input type='text'
                                value = {input.defense}
                                name = 'defense'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.defense && (
                                <p className='error'>{errors.defense}</p>
                            )}
                        </div>
                        <div>
                            <div className={style.name}>
                                <label>Velocidad:</label>
                                <input type='text'
                                value = {input.speed}
                                name = 'speed'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.speed && (
                                <p className='error'>{errors.speed}</p>
                            )}
                        </div>
                        <div>
                            <div  className={style.name}>
                                <label>Altura:</label>
                                <input type='text'
                                value = {input.height}
                                name = 'height'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.height && (
                                <p className='error'>{errors.height}</p>
                            )}
                        </div>
                        <div>
                            <div  className={style.name}>
                                <label>Peso:</label>
                                <input type='text'
                                value = {input.weight}
                                name = 'weight'
                                onChange = {handleChange}
                                className={style.input}/>
                            </div>
                            {errors.weight && (
                                <p className='error'>{errors.weight}</p>
                            )}
                        </div>
                        <div className={style.name}>
                            <label>Img:</label>
                            <input type='text'
                            value = {input.img}
                            name = 'img'
                            onChange = {handleChange}
                            className={style.input}/>
                        </div>
                        <div className={style.name}>
                            <label>Tipo:</label>
                            <select onChange = {(e) => handleSelect(e)} className={style.select}>
                                {types.map((e, i) => (
                                    <option value = {i+1}>{e.name}</option>))}
                            </select>
                        </div>
                        <ul className={style.list}>
                            <li>{input.types.length > 0 ? input.types.map(e => e + ' ') : <p>Es necesario al menos 1 tipo</p>}</li>
                        </ul>
                        <button type = 'submit' className={style.btn}>Crear Pokemon</button>
                    </form>
                </div>
        </div>
    )
}
export default Create;