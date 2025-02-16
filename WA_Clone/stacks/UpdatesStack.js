import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import CustomHeader from "../components/Chats/CustomHeader";
import UpdatesScreen from "../screens/UpdatesScreen";

const Stack = createNativeStackNavigator();

const UpdatesStack = () => {
  const rightIcons = [
    
  ];

  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        header: () => (
          <CustomHeader title="Updates" rightIcons={rightIcons} />
        ),
      }}
    >
      <Stack.Screen name="Updates" component={UpdatesScreen} />
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

export default UpdatesStack;
