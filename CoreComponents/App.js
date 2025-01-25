import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{ backgroundColor: "green", width: 200, height: 200 }}
      ></View>
      <View style={{ backgroundColor: "red", width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "yellow",
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
        ></View>
      </View>
      <View
        style={{ backgroundColor: "yellow", width: 200, height: 200 }}
      ></View>
    </View>
  );
}
