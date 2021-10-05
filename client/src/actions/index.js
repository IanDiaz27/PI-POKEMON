import axios from 'axios';
export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POWER = 'ORDER_BY_POWER';

export const getPokemons = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/pokemons')
        .then(r => r.data)
        .then(r => {
            dispatch({
                type: GET_POKEMONS,
                payload: r
            })
        })
    }
}

export const filterByType = (payload) => {
    return{
        type: FILTER_BY_TYPE,
        payload
    }
}

export const orderByName = (payload) => {
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export const orderByPower = (payload) => {
    return{
        type: ORDER_BY_POWER,
        payload
    }
}

