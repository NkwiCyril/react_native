import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function PokemonCard({
  name,
  type,
  typeIcon,
  image,
  moves,
  weaknesses,
  hitPoints,
}) {
  var buttonBorderColor = "";

  if (type == "Grass") {
    buttonBorderColor = "green";
  } else if (type == "Fire") {
    buttonBorderColor = "orange";
  } else if (type == "Water") {
    buttonBorderColor = "lightblue";
  } else if (type == "Electric") {
    buttonBorderColor = "yellow";
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hitPoint}>❤️HP: {hitPoints}</Text>
      </View>
      <View style={styles.imageSection}>
        <Image source={image} style={styles.pokemonImage} />
        <View
          style={{
            borderWidth: 1,
            borderColor: buttonBorderColor,
            borderRadius: 15,
            borderWidth: 3,
            marginVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Button title={typeIcon + " " + type} color={"black"} />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.moves}>
          <Text style={{ fontWeight: "bold" }}>Moves:</Text> {moves.join(", ")}
        </Text>
        <Text style={styles.weakness}>
          <Text style={{ fontWeight: "bold" }}>Weakness:</Text>{" "}
          {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    backgroundColor: "white",
    width: "85%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
  },

  topSection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
  },

  hitPoint: {
    fontSize: 20,
  },

  imageSection: {
    alignItems: "center",
    padding: 30,
  },

  pokemonImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  pokemonElement: {},

  bottomSection: {
    width: "100%",
    justifyContent: "center",
    gap: 10,
  },

  moves: {
    fontSize: 20,
  },

  weakness: {
    fontSize: 20,
  },
});
