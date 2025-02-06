import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Box style={{ backgroundColor: "red" }}>Box 1</Box>
      <Box style={{ backgroundColor: "green" }}>Box 2</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 3</Box>
      <Box style={{ backgroundColor: "brown" }}>Box 4</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 5</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 6</Box>
      <Box style={{ backgroundColor: "lightblue" }}>Box 7</Box> */}

      <View style={styles.boxContainer1}>
        <View style={styles.leftBox}></View>
        <View style={styles.rightBoxes}>
          <View style={styles.rightBox}></View>
          <View style={styles.rightBox}></View>
        </View>
      </View>
      <View style={styles.boxContainer3}>
        <View style={styles.leftBox}></View>
        <View style={styles.rightBox}></View>
      </View>
      <View style={styles.boxContainer2}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 10
  },

  boxContainer1: {
    flex: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10
  },

  boxContainer2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#004e4e",
    borderRadius: 10
  },

  boxContainer3: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10
  },

  leftBox: {
    flex: 1,
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#004e4e",
  },

  rightBoxes: {
    flex: 1,
    justifyContent: "space-around",
    width: "30%",
    gap: 10
  },

  rightBox: {
    flex: 1,
    backgroundColor: "#004e4e",
    width: "100%",
    borderRadius: 10,
  }
});
