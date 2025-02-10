export default pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
    typeIcon: "🌿",
    image: require("../assets/pokemons/pok_4.png"),
    moves: ["Overgrow", "Chlorophyll"],
    weaknesses: [],
    hitPoints: 39
  },

  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    typeIcon: "🔥",
    image: require("../assets/pokemons/pok_2.png"),
    moves: ["Blaze", "Solar Power"],
    weaknesses: ["Water", "Ground"],
    hitPoints: 44
  },

  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    typeIcon: "💧",
    image: require("../assets/pokemons/pok_1.png"),
    moves: ["Torrent", "Water Gun"],
    weaknesses: ["Fire", "Electric"],
    hitPoints: 30
  },

  {
    id: 4,
    name: "Pikachu",
    type: "Electric",
    typeIcon: "⚡",
    image: require("../assets/pokemons/pok_5.png"),
    moves: ["Thunder Shock", "Static"],
    weaknesses: ["Ground", "Grass"],
    hitPoints: 35
  },

  {
    id: 5,
    name: "Charizard",
    type: "Fire",
    typeIcon: "🔥",
    image: require("../assets/pokemons/pok_3.png"),
    moves: ["Blaze", "Solar Power"],
    weaknesses: ["Water", "Ice"],
    hitPoints: 58
  },
];
