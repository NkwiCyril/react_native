import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello, {name}!</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        // secureTextEntry={true}
        // keyboardType=""
        // autoCapitalize="none"
        // autoCorrect={false}
        // returnKeyType="done"
        // onBlur={() => console.log("Blur")}
        // onFocus={() => console.log("Focus")}
        // maxLength={20}
        // editable={true} // make input uneditable
        // onSelectionChange={() => console.log("Selection changed")}
        // onContentSizeChange={() => console.log("Content size changed")}
        // onLayout={() => console.log("Layout changed")}
        // onEndEditing={() => console.log("End editing")}
        // onKeyPress={() => console.log("Key press")}
        // onTouchStart={() => console.log("Touch start")}
        // onTouchMove={() => console.log("Touch move")}
        // onTouchEnd={() => console.log("Touch end")}
      />
      <TextInput style={styles.input} multiline placeholder="message"/>
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
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginVertical: 10,
    borderRadius: 5,
  },
});
