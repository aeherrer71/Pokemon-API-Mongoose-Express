import { Router } from "express";
import * as controllers from "../controllers/pokemon.js";
const router = Router();

router.get("/", controllers.getPokemons);
router.get("/id/:id", controllers.getPokemon);
router.get("/pokedexId/:pokedexId", controllers.getPokedex);
router.get("/name/:name", controllers.getName);

router.post("/", controllers.createPokemon);

router.put("/id/:id", controllers.updatePokemon);
router.put("/pokedexId/:pokedexId", controllers.updateByPokedex);
router.put("/name/:name", controllers.updateByName);

router.delete("/id/:id", controllers.deletePokemon);

export default router;
