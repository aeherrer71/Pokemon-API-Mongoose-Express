# Pokemon Mongoose-Express-API

## Description

- This is a pokemon API. The inspiration for this project came from the original [PokeApi](https://pokeapi.co/). The [PokeApi](https://pokeapi.co/) referenced provides a lot of information and no way to directly access all of the pokemon and their images without multiple fetches.

- I tried using this API to render images for a [previous memory game project](https://prismatic-tapioca-fa0a95.netlify.app/) and I could not figure out how to get the artwork for each individual Pokemon so I used a Digimon API instead.

## Documentation

- The API has roujtes for full CRUD functionality and here are the methods to access:
  <ul> <li> 1. Get all pokemon: router.get("/", controllers.getPokemons)</li> 
  <li> 2. Get a single pokemon by Database ID: router.get("/id/:id", controllers.getPokemon)</li>
  <li> 3. Get a single pokemon by Pokedex Number: router.get("/pokedexId/:pokedexId", controllers.getPokedex)</li>
  <li> 4. Get a single pokemon by Pokemon Name: router.get("/name/:name", controllers.getName)</li> 
  <li> 5. Create a new Pokemon: router.post("/", controllers.createPokemon)</li> 
  <li> 6. Update an existing Pokemon by Database ID: router.put("/id/:id", controllers.updatePokemon)</li>
  <li> 7. Update an existing Pokemon by Pokedex Number: router.put("/pokedexId/:pokedexId", controllers.updateByPokedex)</li> 
  <li> 8. Update an existing Pokemon by Name: router.put("/name/:name", controllers.updateByName)</li> 
  <li> Remove a pokemon by Database ID: router.delete("/id/:id", controllers.deletePokemon)</li>
  </ul>

## Resources

- I used [this](https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/) article to figure out how to fetch each individual Pokemons profile.
# Pokemon-API-Mongoose-Express
