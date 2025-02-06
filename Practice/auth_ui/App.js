import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import meditationImage from "./assets/mediation_image.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.meditationImage}
        source={meditationImage}
      ></ImageBackground>
      <View style={styles.contentContainer}>
        <View style={{ marginTop: 50, marginHorizontal: 10 }}>
          <Text style={styles.title}>
            Take a Breath: Your Calm in Every Moment
          </Text>
          <Text style={styles.description}>
            Welcome to Take a Breath, the app designed to help you relax, focus,
            and recharge. With guided breathing exercises and soothing visuals,
            we make it simple to find your calm anytime, anywhere.
          </Text>
          <Text style={styles.slogan}>Breathe better, live better.</Text>
        </View>

        <View style={styles.getStarted}>
          <View style={styles.btnLogin}>
            <Button title="Login" color="black" />
          </View>
          <View style={styles.btnRegister}>
            <Button title="Register" color="white" />
          </View>
          <View style={styles.thirdParty}>
            <Text style={{ color: "white", marginBottom: 17, fontSize: 15 }}>
              Or sign in with
            </Text>
            <View style={styles.iconContainer}>
              <Ionicons
                name="logo-google"
                size={40}
                color="#004e4e"
                style={styles.icon}
                onPress={() => {
                  alert('Login with Google')
                }}
              />
              <Ionicons
                name="logo-twitter"
                size={40}
                color="#004e4e"
                style={styles.icon}
                onPress={() => {
                  alert('Login with Twitter')
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  thirdParty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 150,
  },

  icon: {
    marginHorizontal: 10,
    borderRadius: "50%",
    backgroundColor: "white",
    padding: 10,
  },

  getStarted: {
    marginTop: 55,
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },

  btnLogin: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    width: 380,
    backgroundColor: "white",
  },

  btnRegister: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    width: 380,
    backgroundColor: "#004e4e",
  },

  meditationImage: {
    flex: 1,
    width: "100%",
    display: "relative",
  },

  contentContainer: {
    borderColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
  },

  description: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    padding: 5,
  },

  slogan: {
    fontStyle: "italic",
    color: "white",
    marginTop: 10,
    marginBottom: 50,
    textAlign: "center",
  },
});
