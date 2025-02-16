import { StyleSheet, View, FlatList, ScrollView, Text } from "react-native";
import { Colors } from "../constants/colors";
import { categories, chats } from "../data";
import Notification from "../components/Chats/Notification";
import Category from "../components/Chats/Category";
import ChatItem from "../components/Chats/ChatItem";
import BottomMessage from "../components/Chats/BottomMessage";

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
          <BottomMessage />
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
});

export default ChatsScreen;
