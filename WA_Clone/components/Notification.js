import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Notification = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleNotification = () => {
    setIsDismissed(true);
  };

  return (
    <>
      {!isDismissed && (
        <View style={styles.container}>
          <Ionicons
            name="cloud-upload-outline"
            size={32}
            color={Colors.whatsAppGreen}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.message} numberOfLines={3}>
              Your Google storage is over 70% full. Make sure you have enough
              storage for backups.
            </Text>

            <Pressable
              onPress={() => {
                alert("Redirecting to Google Storage...");
              }}
            >
              <Text style={styles.cta}>Check now</Text>
            </Pressable>
          </View>
          <Ionicons
            name="close-outline"
            size={32}
            color={"gray"}
            onPress={handleNotification}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.notificationGreen,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    gap: 17,
    position: "relative",
    top: -13,
  },

  message: {
    color: Colors.textWhite,
    fontSize: 15,
  },

  cta: {
    fontSize: 15,
    color: Colors.unreadIndicatorBlue,
    marginVertical: 2,
  },
});

export default Notification;
