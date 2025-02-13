import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={{ 
            fontSize: 30,
            color: Colors.textWhite,
         }}>Hello!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatsScreen;
