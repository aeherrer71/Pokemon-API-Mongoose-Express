import db from "../db/connection.js"
import pokemonSchema from "../models/pokemon.js"
import pokemonRaw from "./pokemon.json" assert {type: "json"}
import imagesRaw from "./images.json" assert {type: "json"}
import mongoose from "mongoose"



const createDatabase = async () => {

  let updatedPokedex = pokemonRaw.map((pokemon) => {
    imagesRaw.forEach((img) => {
      if (pokemon.pokedexId === img.id) {
        pokemon.image = img.artwork.image
      }
    })

    return pokemon
  })

  await db.dropDatabase();
  await pokemonSchema.create(updatedPokedex)
  await db.close()

}

createDatabase()

