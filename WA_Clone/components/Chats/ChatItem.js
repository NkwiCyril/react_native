import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ProfilePic from "./ProfilePic";

const ChatItem = ({
  icon,
  profilePic,
  title,
  lastMessage,
  lastMessageDatetime,
  unreadMessages,
  isPinned,
  isMuted,
}) => {
  return (
    <View style={styles.chatContainer}>
      <Pressable>
        <ProfilePic image={profilePic} icon={icon} />
      </Pressable>
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          {unreadMessages > 0 ? (
            <Text
              style={[
                styles.lastMessageDatetime,
                { color: Colors.whatsAppGreen },
              ]}
            >
              {lastMessageDatetime}
            </Text>
          ) : (
            <Text style={styles.lastMessageDatetime}>
              {lastMessageDatetime}
            </Text>
          )}
        </View>
        <View style={styles.bottomSection}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.lastMessage}
          >
            {lastMessage}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 2,
            }}
          >
            {(isPinned && (
              <MaterialCommunityIcons name="pin" size={20} color={"gray"} />
            )) ||
              (isMuted && (
                <MaterialIcons
                  name="notifications-off"
                  size={20}
                  color={"gray"}
                />
              ))}
            {unreadMessages > 0 && (
              <View style={styles.unreadMessages}>
                <Text>{unreadMessages}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
    gap: 10,
  },

  title: {
    flex: 1,
    fontSize: 18,
    color: Colors.textWhite,
  },

  lastMessageDatetime: {
    fontSize: 14,
    color: "gray",
  },

  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  lastMessage: {
    fontSize: 15,
    color: "gray",
    fontWeight: "400",
    maxWidth: "80%",
    flex: 1,
  },

  unreadMessages: {
    backgroundColor: Colors.whatsAppGreen,
    borderRadius: 100,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatItem;
