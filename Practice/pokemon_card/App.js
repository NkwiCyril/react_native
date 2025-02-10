import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";
import pokemons from "./data/pokemons";

export default function App() {

  const pokemonCards = pokemons.map((pokemon) => {
    return <PokemonCard 
      name={pokemon.name}
      type={pokemon.type}
      typeIcon={pokemon.typeIcon}
      image={pokemon.image}
      moves={pokemon.moves}
      weaknesses={pokemon.weaknesses}
      hitPoints={pokemon.hitPoints}
      key={pokemon.id}  
    />
  })

  return (
    <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
      <SafeAreaView style={styles.container} >
        <StatusBar style="auto" />
          { pokemonCards }
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
});
