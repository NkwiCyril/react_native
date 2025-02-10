import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log("Login successful", {
        "username": username,
        "password": password,
      });
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <StatusBar style="auto" />
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.error}>{errors.username}</Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        <Button title="Login" onPress={() => handleLogin()} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    backgroundColor: "#fff",
    padding: 20,
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
  error: {
    color: "red",
    marginBottom: 10,
  },
});

{
  /* <Text>Hello, {name}!</Text> */
}
{
  /* <TextInput
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
      /> */
}
{
  /* <TextInput style={styles.input} multiline placeholder="message"/> */
}
