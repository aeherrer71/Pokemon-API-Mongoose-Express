import mongoose from "mongoose";

const Schema = mongoose.Schema;

let pokemonSchema = new Schema({
  "attack": Number,
  "defense": Number,
  "height": Number,
  "hp": Number,
  "pokedexId": Number,
  "name": String,
  "spattack": Number,
  "spdefense": Number,
  "speed": Number,
  "weight": Number,
  "image": String
});

export default mongoose.model("pokemons", pokemonSchema);




