import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <StatusBar />
      {/* Controls the status bar (with time, battery icon, WiFi icon and all) of the application */}
      <ScrollView>
        {/* <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="large" color="red" /> */}
        {/* Displays circular loading indicator for loading processes (loading an app, submitting a form, saving updates) */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        > 
          <Pressable
            onPress={() => {
              console.log("Short Pressed!!");
            }}
            onLongPress={() => {
              console.log("Long Pressed!!");
            }}
          >
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

          {/* MODAL COMPONENT */}
          <View>
            <Button
              title="Show modal"
              onPress={() => setIsVisibleModal(true)}
            />
            <Modal
              visible={isVisibleModal}
              onRequestClose={() => setIsVisibleModal(false)}
              animationType="slide"
              presentationStyle="formSheet"
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>This is a modal</Text>
                <Button
                  title="Close modal"
                  onPress={() => setIsVisibleModal(false)}
                />
              </View>
            </Modal>
          </View>
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
          rebum. Stet kasd
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
