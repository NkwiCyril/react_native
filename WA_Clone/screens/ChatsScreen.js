import { StyleSheet, View, FlatList, ScrollView, Text } from "react-native";
import { Colors } from "../constants/colors";
import { categories, chats } from "../data";
import { Ionicons } from "@expo/vector-icons";
import Notification from "../components/Notification";
import Category from "../components/Category";
import ChatItem from "../components/ChatItem";

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={styles.verticalScrollView}>
          <Notification />

          <View style={styles.horizontalScrollView}>
            <FlatList
              data={categories}
              renderItem={({ item }) => {
                const { name, label, color } = item;
                return (
                  <Category name={name} label={label} labelColor={color} />
                );
              }}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
          {chats.map((chat) => {
            return (
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
            );
          })}
          <View style={styles.bottom}>
            <Ionicons name="lock-closed" color={"gray"} size={12} />
            <Text style={styles.bottomText}>
              Your personal messages are{" "}
              <Text style={{ color: Colors.whatsAppGreen }}>
                end-to-end encrypted
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
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

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    gap: 2,
  },

  bottomText: {
    color: "gray",
    fontSize: 12,
  },
});

export default ChatsScreen;
