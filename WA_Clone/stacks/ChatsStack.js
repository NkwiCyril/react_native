import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../screens/ChatsScreen";
import CustomHeader from "../components/Chats/CustomHeader";
import { Colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const ChatsStack = () => {
  const rightIcons = [
    { name: "camera-outline" },
    { name: "search-outline" },
    { name: "ellipsis-vertical" },
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        header: () => (
          <CustomHeader title="WhatsApp" rightIcons={rightIcons} />
        ),
      }}
    >
      <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
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

export default ChatsStack;
