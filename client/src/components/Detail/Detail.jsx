import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../actions";

const Detail = (props) => {
    const dispatch = useDispatch();
    const pokeDetail = useSelector(state => state.pokemonDetail)

    useEffect(() => {
        dispatch(getById(props.match.params.id))
    },[])
    
    return(
        <div>
            <h1>{pokeDetail[0].name}</h1>
        </div>
    )
}

export default Detail