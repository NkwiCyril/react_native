import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import UpdatesStack from "./stacks/UpdatesStack";
import ChatsStack from "./stacks/ChatsStack";
import CallsStack from "./stacks/CallsStack";
import ToolsStack from "./stacks/ToolsStack";
import IconHighlight from "./components/IconHighlight";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.darkBackground,
            borderColor: Colors.darkBackground,
            elevation: 20,
            height: 70,
          },
          tabBarIconStyle: {
            color: Colors.backgroundWhite,
            marginBottom: 5,
          },
          tabBarLabelStyle: {
            color: Colors.backgroundWhite,
            fontSize: 13,
          },
        }}
      >
        <Tab.Screen
          name="Chats"
          component={ChatsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <IconHighlight>
                  <MaterialCommunityIcons
                    name={
                      focused
                        ? "message-text"
                        : "message-text-outline"
                    }
                    color={"white"}
                    size={25}
                  />
                </IconHighlight>
              ) : (
                <MaterialCommunityIcons
                  name={
                    focused
                      ? "message-reply-text"
                      : "message-reply-text-outline"
                  }
                  color={"white"}
                  size={25}
                />
              ),
              tabBarBadge: '99+',
              tabBarBadgeStyle: {
                backgroundColor: Colors.whatsAppGreen,
                marginRight: -20,
                fontSize: 12,
              },
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <IconHighlight>
                  <MaterialCommunityIcons
                    name={focused ? "phone" : "phone-outline"}
                    color={"white"}
                    size={25}
                  />
                </IconHighlight>
              ) : (
                <MaterialCommunityIcons
                  name={focused ? "phone" : "phone-outline"}
                  color={"white"}
                  size={25}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Updates"
          component={UpdatesStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <IconHighlight>
                  <Ionicons
                    name={focused ? "chatbubble" : "chatbubble-outline"}
                    color={"white"}
                    size={25}
                  />
                </IconHighlight>
              ) : (
                <Ionicons
                  name={focused ? "chatbubble" : "chatbubble-outline"}
                  color={"white"}
                  size={25}
                />
              ),
              tabBarBadge: '',
              tabBarBadgeStyle: {
                backgroundColor: Colors.whatsAppGreen,
                borderRadius: 50,
                marginRight: -10,
              },
  
          }}
        />
        <Tab.Screen
          name="Tools"
          component={ToolsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <IconHighlight>
                  <MaterialCommunityIcons
                    name={focused ? "store" : "store-outline"}
                    color={"white"}
                    size={25}
                  />
                </IconHighlight>
              ) : (
                <MaterialCommunityIcons
                  name={focused ? "store" : "store-outline"}
                  color={"white"}
                  size={25}
                />
              ),
              tabBarBadge: '',
              tabBarBadgeStyle: {
                backgroundColor: Colors.whatsAppGreen,
                marginRight: -9,
              },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
