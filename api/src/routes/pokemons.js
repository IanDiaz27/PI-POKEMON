const {Router} = require('express');
const axios = require('axios').default;
const {Pokemon, Tipo} = require('../db.js');

const router = Router()

router.get("/", (req, res) => {
    let {name} = req.query;
    if(name){ //Si me mandan un name por query
        Pokemon.findOne({
            where: {name: name},
            include: Tipo
        })
        .then(respDb => {
            if(respDb){
                return res.json(respDb)
            }
        })
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(r => r.data)
        .then(r => {
            let pokemon = {
                id: r.id,
                name: r.name,
                types: r.types.map(p => p.type.name),
                img: r.sprites.other['official-artwork'].front_default
            }
            return res.json(pokemon)
        })
    } else { //Si no me mandan un name por query
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(respI => {
            let pokemonsI = respI.data.results;
            axios.get(respI.data.next)
            .then(respII => {
                let pokemonsII = respII.data.results;
                let allPokemons = pokemonsI.concat(pokemonsII) // Tengo los 40 pokemons
                let pokeUrl = allPokemons.map(r => r.url)
                let pokePromises = pokeUrl.map(url => axios.get(url));
                Promise.all(pokePromises)
                .then(resp => {
                    let allPokeData = resp.map(p => p.data);
                    let pokeFinal = [];
                    allPokeData.map(r =>{
                        pokeFinal.push({
                            id: r.id,
                            name: r.name,
                            types: r.types.map(p => p.type.name),
                            img: r.sprites.other['official-artwork'].front_default,
                            hp: r.stats[0].base_stat,
                            attack: r.stats[1].base_stat,
                            defense: r.stats[2].base_stat,
                            specialAttack: r.stats[3].base_stat,
                            specialDefense: r.stats[4].base_stat,
                            speed: r.stats[5].base_stat,
                            weight: r.weight,
                            height: r.height
                        })
                    })
                    Pokemon.findAll({
                        include: {
                            model: Tipo,
                            attributes: ['name']
                        }
                    })
                    .then(respDb => {
                        let allPokemonsFinal = (pokeFinal.concat(respDb))
                        return res.json(allPokemonsFinal)
                    })
                    // return res.json(allPokemonsFinal)
                })
            })
        })
    }
})

router.post('/', (req, res) => {
    let {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types
    } = req.body;

        Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
        })
        .then(pokemon => {
            pokemon.addTipo(types).then(() => {
                res.send('Pokemon Creado')
            })
        })
})

router.get('/:idPokemon', (req, res) => {
    let {idPokemon} = req.params;
    Pokemon.findOne({
        where: {id: idPokemon},
        include: Tipo
    })
    .then(respDb => {
        if(respDb){
            return res.json(respDb)
        }
    })
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(r => r.data)
        .then(r => {
            let pokemon = {
                name: r.name,
                types: r.types.map(p => p.type.name),
                img: r.sprites.other['official-artwork'].front_default,
                hp: r.stats[0].base_stat,
                attack: r.stats[1].base_stat,
                defense: r.stats[2].base_stat,
                specialAttack: r.stats[3].base_stat,
                specialDefense: r.stats[4].base_stat,
                speed: r.stats[5].base_stat,
                weight: r.weight,
                height: r.height
            }
            return res.json(pokemon)
        })
    })

module.exports = router;