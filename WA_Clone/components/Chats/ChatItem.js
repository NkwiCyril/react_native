import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ProfilePic from "./ProfilePic";

const ChatItem = ({
  id,
  icon,
  profilePic,
  title,
  lastMessage,
  lastMessageDatetime,
  unreadMessages,
  isPinned,
  isMuted,
  onDelete,
  onEdit,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedImage, setEditedImage] = useState(profilePic);
  const [isEditing, setIsEditing] = useState(false);

  // Handle long press to show options
  const handleLongPress = () => {
    Alert.alert("Chat Options", "Choose an action", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Edit",
        onPress: () => setModalVisible(true),
      },
      {
        text: "Delete",
        onPress: () => handleDeleteConfirmation(),
        style: "destructive",
      },
    ]);
  };

  // Handle delete confirmation
  const handleDeleteConfirmation = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this chat?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            if (id) {
              onDelete(id);
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  // Handle editing chat
  const handleSaveEdit = async () => {
    // Validate inputs
    if (!editedTitle.trim()) {
      Alert.alert("Error", "Chat name cannot be empty");
      return;
    }

    setIsEditing(true);
    try {
      await onEdit(id, editedTitle.trim(), editedImage.trim());
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Error", error.message || "Failed to update chat");
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.chatContainer}>
      {/* Profile Picture */}
      <Pressable>
        <ProfilePic image={profilePic} icon={icon} />
      </Pressable>

      {/* Chat Info */}
      <Pressable style={styles.contentContainer} onLongPress={handleLongPress}>
        <View>
          <View style={styles.topSection}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {title}
            </Text>
            <Text
              style={[
                styles.lastMessageDatetime,
                unreadMessages > 0 && { color: Colors.whatsAppGreen },
              ]}
            >
              {lastMessageDatetime}
            </Text>
          </View>
          <View style={styles.bottomSection}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.lastMessage}
            >
              {lastMessage}
            </Text>
            <View style={{ flexDirection: "row", gap: 2 }}>
              {isPinned && (
                <MaterialCommunityIcons name="pin" size={20} color={"gray"} />
              )}
              {isMuted && (
                <MaterialIcons
                  name="notifications-off"
                  size={20}
                  color={"gray"}
                />
              )}
              {unreadMessages > 0 && (
                <View style={styles.unreadMessages}>
                  <Text>{unreadMessages}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </Pressable>

      {/* Edit Chat Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Chat</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit chat name"
              value={editedTitle}
              onChangeText={setEditedTitle}
              editable={!isEditing}
            />
            <TextInput
              style={styles.input}
              placeholder="Edit image URL"
              value={editedImage}
              onChangeText={setEditedImage}
              editable={!isEditing}
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
                disabled={isEditing}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  styles.saveButton,
                  isEditing && styles.disabledButton,
                ]}
                onPress={handleSaveEdit}
                disabled={isEditing}
              >
                <Text style={styles.buttonText}>
                  {isEditing ? "Saving..." : "Save"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginBottom: 15,
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
    borderRadius: 50,
    width: "auto",
    height: 20,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: Colors.darkBackground,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.textWhite,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.textWhite,
    borderRadius: 5,
    marginBottom: 10,
    color: Colors.textWhite,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  saveButton: {
    backgroundColor: Colors.whatsAppGreen,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default ChatItem;
