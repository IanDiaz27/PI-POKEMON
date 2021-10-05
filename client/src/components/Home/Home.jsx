import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { filterByType, getPokemons, orderByName, orderByPower } from "../../actions";
import Card from "../Card/Card.jsx"
import Paginado from "../Paginado/Paginado";

const Home = () =>{
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [orden, setOrden] = useState('')
    const lastPokemon = currentPage * pokemonsPerPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(firstPokemon, lastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons());
    },[])

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

    return(
        <div>
            <Link to = '/pokemons'>Crear Pokemon</Link>
            <h1>Home Pokemon</h1>
            <button onClick = {e => {handleClick(e)}}>
                Borrar filtros
            </button>
            <div>
               <select onChange = {e => handleOrderByName(e)}>
                   <option value='alf'>A-Z</option>
                   <option value='invalf'>Z-A</option>
               </select>
               <select onChange = {e => handleOrderByAttack(e)}>
                   <option value='asc'>Ascendente</option>
                   <option value='desc'>Descendente</option>
               </select>
               <select>
                   <option value='api'>Api</option>
                   <option value='db'>Creados</option>
               </select>
               <select onChange = {e => handleFilterByType(e)}>
                   <option value='all'>All</option>
                   <option value='normal'>Normal</option>
                   <option value='fighting'>Fighting</option>
                   <option value='flying'>Flying</option>
                   <option value='poison'>Poison</option>
                   <option value='ground'>Ground</option>
                   <option value='rock'>Rock</option>
                   <option value='bug'>Bug</option>
                   <option value='ghost'>Ghost</option>
                   <option value='steel'>Steel</option>
                   <option value='fire'>Fire</option>
                   <option value='water'>Water</option>
                   <option value='grass'>Grass</option>
                   <option value='electric'>Electric</option>
                   <option value='psychic'>Psychic</option>
                   <option value='ice'>Ice</option>
                   <option value='dragon'>Dragon</option>
                   <option value='dark'>Dark</option>
                   <option value='fairy'>Fairy</option>
                   <option value='unknown'>Unknown</option>
                   <option value='shadow'>Shadow</option>
               </select>
               <Paginado
                    pokemonsPerPage = {pokemonsPerPage}
                    allPokemons = {allPokemons.length}
                    paginado = {paginado}/>
               {
                    currentPokemons.map((e, i) => {
                        return(
                           <div key = {i}>
                               <Link to = {`/home/${e.id}`}>
                               <Card name={e.name} img={e.img} types={e.types}/>
                               </Link>
                           </div>
                       )
                   })
               }
            </div>
        </div>
    )
}
export default Home