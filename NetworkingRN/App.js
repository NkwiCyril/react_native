import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Text,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!postTitle) {
      errors.postTitle = "Title is required";
    }

    if (!postBody) {
      errors.postBody = "Body is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // GET request
  const fetchData = async (limit) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  // POST request
  const addPost = async () => {
    if (!validateForm()) {
      return;
    }
    setIsPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: postTitle, body: postBody }),
        }
      );

      if (!response.ok) {
        throw new alert("Failed to add post. Please try again!");
      }

      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
    } catch (error) {
      console.error("Error adding post:", error);
      setIsLoading(false);
    } finally {
      setIsPosting(false);
    }
  };

  // DELETE request

  // we need the fetchData method to be called when the component mounts
  useEffect(() => {
    fetchData(2);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#000" />
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Post title"
            value={postTitle}
            onChangeText={setPostTitle}
          />
          {errors.postTitle && (
            <Text style={styles.error}>{errors.postTitle}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Post body"
            value={postBody}
            onChangeText={setPostBody}
          />
          {errors.postBody && (
            <Text style={styles.error}>{errors.postBody}</Text>
          )}
          <Button
            title={isPosting ? "Adding..." : "Add Post"}
            onPress={() => addPost()}
            disabled={isPosting}
          />
        </View>
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
              fetchData(5);
              setRefresh(false);
            }}
          />
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
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

  inputContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },

  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
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

  error: {
    color: "red",
    marginBottom: 10,
  },
});
