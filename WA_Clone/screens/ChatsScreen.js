import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/colors";
import { categories, chats } from "../data";
import Notification from "../components/Chats/Notification";
import Category from "../components/Chats/Category";
import ChatItem from "../components/Chats/ChatItem";
import BottomMessage from "../components/Chats/BottomMessage";
import FloatingIconButton from "../components/Chats/FloatingIconButton";

const ChatsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredChats = chats.filter((chat) => {
    switch (selectedCategory) {
      case "Unread":
        return chat.unreadMessages > 0;
      case "Groups":
        return chat.group === true;
      case "Starred":
        return chat.starred === true;
      case "Lead":
        return chat.lead === true;
      default:
        return true; // "All" returns all chats
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.floatingIconButton}>
        <FloatingIconButton
          image={require("../assets/meta-2-removebg-preview.png")}
          onPress={() => console.log("Button pressed")}
          style={{ backgroundColor: Colors.metaIcon, width: 40, height: 40 }}
        />
        <FloatingIconButton
          iconName={"message-plus"}
          size={25}
          iconColor="#000"
          onPress={() => console.log("Button pressed")}
          style={{
            backgroundColor: Colors.backgroundWhite,
            width: 60,
            height: 60,
          }}
        />
      </View>

      <ScrollView style={styles.verticalScrollView}>
        <Notification />

        <View style={styles.horizontalScrollView}>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedCategory(item.name)}>
                <Category
                  name={item.name}
                  label={item.label}
                  labelColor={item.color}
                  isSelected={selectedCategory === item.name}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        {filteredChats.map((chat) => (
          <ChatItem
            title={chat.name}
            lastMessage={chat.lastMessage}
            lastMessageDatetime={chat.lastMessageDatetime}
            icon={chat.icon}
            profilePic={chat.profilePic}
            unreadMessages={chat.unreadMessages}
            isMuted={chat.isMuted}
            isPinned={chat.isPinned}
            key={chat.id}
          />
        ))}

        <BottomMessage />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  horizontalScrollView: {
    paddingBottom: 15,
  },
  verticalScrollView: {
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  floatingIconButton: {
    position: "absolute",
    right: 10,
    bottom: 20,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    gap: 20,
  },
});

export default ChatsScreen;
