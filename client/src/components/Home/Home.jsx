import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { filterByOrigin, filterByType, getPokemons, getTypes, orderByName, orderByPower } from "../../actions";
import Card from "../Card/Card.jsx"
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";

import style from './Home.module.css'

const Home = () =>{
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    const loading = useSelector((state) => state.loading)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [orden, setOrden] = useState('')
    const lastPokemon = currentPage * pokemonsPerPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons && allPokemons.slice(firstPokemon, lastPokemon) 


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getTypes());
    },[dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getPokemons());
    }

    const handleFilterByType = (e) => {
        dispatch(filterByType(e.target.value))
    }

    const handleOrderByName = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    const handleOrderByAttack = (e) => {
        e.preventDefault()
        dispatch(orderByPower(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    const handleOrigin = (e) => {
        dispatch(filterByOrigin(e.target.value))
    }
    return(
        <div className = {style.background}>
            <div className = {style.head}>
                <Link to = '/about'className = {style.span}>
                    <span>About</span>
                </Link>
                <h1 className = {style.title}>PokeApp</h1>
            </div>
            <div className = {style.contain}>
                <Link to = '/pokemons' className={style.link}>
                    <button className={style.create}>Crear Pokemon</button>
                </Link>
                <SearchBar/>
            </div>
            <div>
                <div className={style.select}>
                    <button onClick = {e => {handleClick(e)}} className={style.filter}>
                        Borrar filtros
                    </button>
                    <select onChange = {e => handleOrderByName(e)} className = {style.az}>
                        <option value='alf'>A-Z</option>
                        <option value='invalf'>Z-A</option>
                    </select>
                    <select onChange = {e => handleOrderByAttack(e)} className = {style.power}>
                        <option value='asc'>Power Min</option>
                        <option value='desc'>Power Max</option>
                    </select>
                    <select onChange = {e => handleOrigin(e)} className = {style.api}>
                        <option value='all'>All</option>
                        <option value='api'>Api</option>
                        <option value='db'>Creados</option>
                    </select>
                    <select onChange = {e => handleFilterByType(e)} className = {style.tipo}>
                        <option value='all'>All</option>
                        <option value='normal '>Normal</option>
                        <option value='fighting '>Fighting</option>
                        <option value='flying '>Flying</option>
                        <option value='poison '>Poison</option>
                        <option value='ground '>Ground</option>
                        <option value='rock '>Rock</option>
                        <option value='bug '>Bug</option>
                        <option value='ghost '>Ghost</option>
                        <option value='steel '>Steel</option>
                        <option value='fire '>Fire</option>
                        <option value='water '>Water</option>
                        <option value='grass '>Grass</option>
                        <option value='electric '>Electric</option>
                        <option value='psychic '>Psychic</option>
                        <option value='ice '>Ice</option>
                        <option value='dragon '>Dragon</option>
                        <option value='dark '>Dark</option>
                        <option value='fairy '>Fairy</option>
                        <option value='unknown '>Unknown</option>
                        <option value='shadow '>Shadow</option>
                    </select>
               </div>
               {
                (loading) ? <Loading/> :
                <div>
                    <Paginado
                        pokemonsPerPage = {pokemonsPerPage}
                        allPokemons = {allPokemons.length}
                        paginado = {paginado}/>
                    {    
                        currentPokemons && currentPokemons.map((e, i) => {
                            if(e.types){
                                return(
                                    <div key = {i} className = {style.card}>
                                        <Link to = {`/home/${e.id}`} className={style.link}>
                                            <Card name={e.name} img={e.img} types={e.types}/>
                                        </Link>
                                    </div>
                                )
                            } else if (e.tipos) {
                                return(
                                    <div key = {i} className = {style.card}>
                                        <Link to = {`/home/${e.id}`} className={style.link}>
                                            <Card name={e.name} img={e.img} types={e.tipos.map(e => e.name + ' ')}/>
                                        </Link>
                                    </div>
                                )
                            } else if (!e.types && !e.tipos) {
                                return(
                                    <h1 className = {style.not}>El pokemon NO existe</h1>
                                )
                            }
                        })
                    }
                    <Paginado
                        pokemonsPerPage = {pokemonsPerPage}
                        allPokemons = {allPokemons.length}
                        paginado = {paginado}/>
                </div>
                }
            </div>
        </div>
    )
}
export default Home