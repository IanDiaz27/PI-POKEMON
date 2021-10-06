import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)

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
        console.log(input)
    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
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

    useEffect(() => {
        dispatch(getTypes())
    },[])

    return(
        <div>
            <Link to = '/home'>
                <button>Home</button>
            </Link>
            <h1>Crea tu Pokemon</h1>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre</label>
                    <input type='text'
                    value = {input.name}
                    name = 'name'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>hp</label>
                    <input type='text'
                    value = {input.hp}
                    name = 'hp'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>Attack</label>
                    <input type='text'
                    value = {input.attack}
                    name = 'attack'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>Defense</label>
                    <input type='text'
                    value = {input.defense}
                    name = 'defense'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>Speed</label>
                    <input type='text'
                    value = {input.speed}
                    name = 'speed'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>Height</label>
                    <input type='text'
                    value = {input.height}
                    name = 'height'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>Weight</label>
                    <input type='text'
                    value = {input.weight}
                    name = 'weight'
                    onChange = {handleChange}/>
                </div>
                <div>
                    <label>img</label>
                    <input type='text'
                    value = {input.img}
                    name = 'img'
                    onChange = {handleChange}/>
                </div>
                <select onChange = {(e) => handleSelect(e)}>
                    {types.map((e, i) => (
                        <option value = {e.name}>{e.name}</option>))}
                </select>
                <ul><li>{input.types.map(e => e + ' ')}</li></ul>
                <button type = 'submit'>Crear Pokemon</button>
            </form>
        </div>
    )
}
export default Create;