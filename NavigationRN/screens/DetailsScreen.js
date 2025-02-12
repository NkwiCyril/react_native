import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

function DetailsScreen({}) {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <Text>This is the Details Screen</Text>
        <Button title="Back to Home" onPress={() => {
            navigation.navigate("Home")
        }}/>
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default DetailsScreen;
