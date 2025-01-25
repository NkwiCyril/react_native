import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logoImage = require("./assets/favicon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <ScrollView>
        <ImageBackground
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        ></ImageBackground>
        <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          est Lorem ipsum dolor sit amet.
        </Text>
        <ImageBackground
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        ></ImageBackground>
              <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          est Lorem ipsum dolor sit amet.
        </Text>
        <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          est Lorem ipsum dolor sit amet.
        </Text>
        <ImageBackground
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        ></ImageBackground>
      </ScrollView>
    </View>
  );
}
