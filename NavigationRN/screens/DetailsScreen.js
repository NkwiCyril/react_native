import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const { name } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Details Screen</Text>
      <Text>The name you passed is: {name}</Text>
      <Button
        title="Back to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Sending a favor to the home screen"
        onPress={() => {
          navigation.navigate("Home", {
            info: "Please can you change the name you sent? Thanks!",
          });
        }}
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
