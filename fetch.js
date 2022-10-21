import fetch from "node-fetch"
import { promises as fsPromises } from 'fs';

let url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  fetch(url)
  .then(response => response.json())
    .then((allpokemon) => {
      allpokemon.results.forEach((pokemon) => {
        let url = pokemon.url
        
        fetch(url)
          .then(response => response.json())
          .then((character) => {

           let pokeObj = {
              artwork: character.sprites.other["official-artwork"],
             name: character.forms[0],
              id: character.id
            }
            fsPromises.appendFile('./seed/images.json', JSON.stringify(pokeObj))
          
          }
        
        ) 
    })
  })

