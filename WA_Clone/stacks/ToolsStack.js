import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import CustomHeader from "../components/Chats/CustomHeader";
import ToolsScreen from "../screens/ToolsScreen";

const Stack = createNativeStackNavigator();

const ToolsStack = () => {
  const rightIcons = [
    { name: "hammer" },
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        header: () => (
          <CustomHeader title="Tools" rightIcons={rightIcons} />
        ),
      }}
    >
      <Stack.Screen name="Tools" component={ToolsScreen} />
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

export default ToolsStack;
