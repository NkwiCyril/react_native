import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
const logoImage = require("./assets/favicon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <Pressable onPress={() => {
            console.log("Pressed!!");
            
          }}>
            <ImageBackground
              style={{ width: 200, height: 200 }}
              source={{
                uri: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            ></ImageBackground>
          </Pressable>
          <Button
            title="About Image"
            onPress={() => {
              alert("Black abstract picture");
            }}
          />
        </View>
        <Text
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            style={{ width: 200, height: 200 }}
            source={{
              uri: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          ></ImageBackground>
          <Button
            title="About Image"
            onPress={() => {
              alert("Multi-coloured abstract picture");
            }}
          />
        </View>
        <Text
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet{" "}
          <Text style={{ color: "red", fontSize: "17" }}>clita</Text> kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            style={{ width: 200, height: 200 }}
            source={{
              uri: "https://images.unsplash.com/photo-1561454260-8559bd155736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBjJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
          ></ImageBackground>
          <Button
            title="About Image"
            onPress={() => {
              alert("Landscape picture");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
