import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        <StatusBar style="auto" />
        {pokemonList.map((pokemon) => {
          console.log(pokemon.id);
          
          return (
            <View style={styles.card} key={pokemon.id}>
              <View style={styles.topSection}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.type}>Type: {pokemon.type.join(", ")}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({item}) => {
            console.log(item.id);
            return (
              <View style={styles.card} key={item.id}>
                <View style={styles.topSection}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.type}>Type: {item.type.join(", ")}</Text>
                </View>
              </View>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          // ItemSeparatorComponent={<View style={{ height: 1, backgroundColor: "red" }}></View>}
          ListEmptyComponent={<Text>No Items Found!</Text>}
          ListHeaderComponent={
            <View style={{ padding: 15, alignItems: "center"}}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>List of Pokemons</Text>
            </View>
          }
          ListFooterComponent={
            <View style={{ padding: 15, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>End of the list</Text>
            </View>
          }
          stickyHeaderIndices={[0]}
          stickyFooterIndices={[0]}
          onEndReachedThreshold={0.5}
          onEndReached={() => console.log("End reached")}
          onRefresh={() => console.log("Refreshing")}
          refreshing={false}
          onMomentumScrollBegin={() => console.log("Momentum scroll begin")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
    flex: 1,
    width: "100%",
  },

  card: {
    display: "flex",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    // borderWidth: 2,
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

  type: {
    fontSize: 20,
  },
});
