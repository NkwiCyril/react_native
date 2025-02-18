import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CallsScreen from "../screens/CallsScreen";
import CustomHeader from "../components/Chats/CustomHeader";
import { Colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const CallsStack = () => {
  const rightIcons = [
    { name: "add" },
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        header: () => (
          <CustomHeader title="Calls" rightIcons={rightIcons} />
        ),
      }}
    >
      <Stack.Screen name="CallsScreen" component={CallsScreen} />
    </Stack.Navigator>
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

export default CallsStack;
