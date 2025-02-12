import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ 
        headerStyle: {
          backgroundColor: "#075e54",
          borderRadius: 100,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#f8f8f8",
        }
       }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome back, Cyril!",
            headerStyle: {
              backgroundColor: "#075e54",
              borderRadius: 100,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Pressable
                onPress={() => {
                  alert("Menu pressed!");
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16}}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "#f8f8f8",
            }
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
