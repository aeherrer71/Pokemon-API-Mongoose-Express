import Pokemon from "../models/pokemon.js";

export const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);

    if (pokemon) {
      return res.json(pokemon);
    }

    res.status(404).json({ message: "Pokemon not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPokedex = async (req, res) => {
  try {
    const { pokedexId } = req.params;
    console.log(pokedexId)
    const pokemon = await Pokemon.find({pokedexId: pokedexId});

    if (pokemon) {
      return res.json(pokemon);
    }

    res.status(404).json({ message: "Pokemon not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};





export const updateByPokedex = async (req, res) => {
  try {
    const { pokedexId } = req.params;
    const pokemon = await Pokemon.findOneAndUpdate({pokedexId: pokedexId}, req.body);
    res.status(201).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateByName = async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await Pokemon.findOneAndUpdate({name: name}, req.body);
    res.status(201).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};







export const createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByIdAndUpdate(id, req.body);
    res.status(201).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pokemon.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Pokemon deleted!");
    }

    throw new Error("Pokemon not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};



export const getName = async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await Pokemon.find({name: name});

    if (pokemon) {
      return res.json(pokemon);
    }

    res.status(404).json({ message: "Pokemon not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

