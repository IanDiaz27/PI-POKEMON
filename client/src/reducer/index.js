import {FILTER_BY_TYPE, GET_POKEMONS, ORDER_BY_NAME, ORDER_BY_POWER} from '../actions/index'

const initialState = {
    pokemons: [],
    allPokemons: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case FILTER_BY_TYPE:
            let allPokemons = state.allPokemons;
            let filtered = action.payload === 'all' ? allPokemons : allPokemons.filter(p => {if(p.types.includes(action.payload)) return p})
            return{
                ...state,
                pokemons: filtered
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

        default: return state;
    }
}