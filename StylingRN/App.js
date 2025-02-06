import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "green", flex: 1 }}>Box 2</Box>
      <Box style={{ backgroundColor: "purple", flex: 1 }}>Box 3</Box>
      <Box style={{ backgroundColor: "brown", flex: 1 }}>Box 4</Box>
      <Box style={{ backgroundColor: "orange", flex: 1 }}>Box 5</Box>
      <Box style={{ backgroundColor: "yellow", flex: 1 }}>Box 6</Box>
      <Box style={{ backgroundColor: "lightblue", flex: 1 }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0075cc",
    alignItems: "center",
  },
});
