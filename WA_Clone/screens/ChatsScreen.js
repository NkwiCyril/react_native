import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Colors } from "../constants/colors";
import { categories } from "../data";
import { supabase } from "../utils/supabase.js";
import Notification from "../components/Chats/Notification";
import Category from "../components/Chats/Category";
import ChatItem from "../components/Chats/ChatItem";
import BottomMessage from "../components/Chats/BottomMessage";
import FloatingIconButton from "../components/Chats/FloatingIconButton";
import CreateChatModal from "../components/Chats/CreateChatModal";

const ChatsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const fetchChats = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("chats")
        .select("*")

      if (error) {
        throw error;
      }

      setChats(data || []);
    } catch (error) {
      Alert.alert("Error", `Failed to fetch chats: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();

    const chatsSubscription = supabase
      .channel("chats")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "chats" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setChats((prevChats) => [...prevChats, payload.new]); 
          } else if (payload.eventType === "UPDATE") {
            setChats((prevChats) =>
              prevChats.map((chat) =>
                chat.id === payload.new.id ? payload.new : chat
              )
            ); 
          } else if (payload.eventType === "DELETE") {
            setChats((prevChats) =>
              prevChats.filter((chat) => chat.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(chatsSubscription);
    };
  }, []);

  const handleNewChatCreated = (newChat) => {
    setChats(prevChats => [newChat, ...prevChats]);
    setIsCreateModalVisible(false);
  
    Alert.alert(
      "Chat Created",
      `"${newChat.name}" has been successfully created.`,
      [
        { text: "OK"}
      ]
    );
  };

  const handleDeleteChat = async (chatId) => {
    try {
      setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));

      const { error } = await supabase.from("chats").delete().eq("id", chatId);

      if (error) {
        throw error;
      }

    } catch (error) {
      Alert.alert("Error", `Failed to delete chat: ${error.message}`);
      fetchChats();
    }
  };

  const handleEditChat = async (chatId, newName, newImage) => {
    try {
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === chatId
            ? { ...chat, name: newName, profilePic: newImage }
            : chat
        )
      );

      const { error } = await supabase
        .from("chats")
        .update({
          name: newName,
          profilePic: newImage,
          updated_at: new Date().toISOString(),
        })
        .eq("id", chatId);

      if (error) {
        throw error;
      }

    } catch (error) {
      Alert.alert("Error", `Failed to update chat: ${error.message}`);
      fetchChats();
    }
  };

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
        return true;
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
          onPress={() => {
            setIsCreateModalVisible(true);
          }}
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

        {isLoading ? (
          <Text style={styles.loadingText}>Loading chats...</Text>
        ) : (
          filteredChats.map((chat) => (
            <ChatItem
              key={chat.id}
              id={chat.id}
              title={chat.name}
              lastMessage={chat.lastMessage}
              lastMessageDatetime={chat.lastMessageDatetime}
              icon={chat.icon}
              profilePic={chat.profilePic}
              unreadMessages={chat.unreadMessages}
              isMuted={chat.isMuted}
              isPinned={chat.isPinned}
              onDelete={handleDeleteChat}
              onEdit={handleEditChat}
            />
          ))
        )}

        <BottomMessage />
      </ScrollView>
      <CreateChatModal
        isVisible={isCreateModalVisible}
        onClose={() => setIsCreateModalVisible(false)}
        onChatCreated={handleNewChatCreated}
      />
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
  loadingText: {
    color: Colors.textWhite,
    textAlign: "center",
    marginTop: 20,
  },
});

export default ChatsScreen;
