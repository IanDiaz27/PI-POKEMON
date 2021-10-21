import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQueryName } from "../../actions";

import style from './SearchBar.module.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getQueryName(name))
        console.log(name)
        setName('')
    }

    return(
        <div className = {style.search}>
            <input
            type = 'text'
            placeholder = ' Buscar...'
            onChange = {(e) => handleInputChange(e)}
            value = {name}
            className = {style.input}
            />
            <button type = 'submit' onClick = {(e) => handleSubmit(e)} className = {style.btn}>Buscar</button>
        </div>
    )
} 

export default SearchBar;