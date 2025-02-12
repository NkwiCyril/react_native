import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
//   const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
