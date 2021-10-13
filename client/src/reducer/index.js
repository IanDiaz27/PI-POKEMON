import {GET_POKEMONS,
    GET_QUERY_NAME, 
    GET_TYPE,
    GET_BY_ID,
    ORDER_BY_NAME, 
    ORDER_BY_POWER, 
    FILTER_BY_TYPE, 
    FILTER_BY_ORIGIN,
    POST_POKEMON} from '../actions/index'

const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: [],
    types: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        case GET_QUERY_NAME:
            return{
                ...state,
                pokemons: [action.payload],
            }
        case GET_TYPE:
                return{
                    ...state,
                    types: action.payload
                }
        case GET_BY_ID:
            return{
                ...state,
                detail: action.payload
            }
        case ORDER_BY_NAME:
            let sort = action.payload === 'alf' ? 
                state.pokemons.sort(function(a,b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0
                }):
                state.pokemons.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1
                    }
                    return 0
                })
                return{
                    ...state,
                    pokemons: sort
                }
        case ORDER_BY_POWER:
            let sortp = action.payload === 'asc' ? 
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return 1;
                }
                if(b.attack > a.attack){
                    return -1;
                }
                return 0
            }):
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return -1;
                }
                if(b.attack > a.attack){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                pokemons: sortp
            }
        case FILTER_BY_TYPE:
            let allPokemons = state.allPokemons;
            let filtered = action.payload === 'all' ? allPokemons : allPokemons.filter(p => {if(p.types.includes(action.payload)) return p})
            return{
                ...state,
                pokemons: filtered
            }
        case FILTER_BY_ORIGIN:
            let allPoke = state.allPokemons
            let filter = action.payload === 'db' ? allPoke.filter(e => e.db) : allPoke.filter(e => !e.db)
            return {
                ...state,
                pokemons: action.payload === 'all' ? allPoke : filter
            }
        case POST_POKEMON:
            return{
                ...state
            }
        default: return state;
    }
}