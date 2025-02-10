import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  // GET request
  const fetchData = async (limit) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  // we need the fetchData method to be called when the component mounts
  useEffect(() => {
    fetchData(2);
  }, []);

  if(isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#000"/>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBody}>{item.body}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <Text
              style={{
                alignSelf: "center",
                marginVertical: 10,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Posts
            </Text>
          }
          refreshing={refresh}
          onRefresh={() => {
            setRefresh(true);
            fetchData(30);
            setRefresh(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  cardBody: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
});
