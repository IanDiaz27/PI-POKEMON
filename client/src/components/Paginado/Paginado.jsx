import React from "react";

import style from './Paginado.module.css'

const Paginado = ({pokemonsPerPage, allPokemons, paginado}) => {
    let pageNumbers = [];
    for(let i = 0; i < Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i+1)
    }
    return(
        <nav className={style.nav}>
            <ul className={style.ul}>
                {pageNumbers && pageNumbers.map((number, i) =>(
                    <li key = {i} className={style.li}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado