import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const ProfilePic = ({ image, icon }) => {
  return (
    <View>
      {image ? (
          <View style={styles.profilePicContainer}>
            <ImageBackground
              borderRadius={100}
              source={[image,{ uri: image }]}
              style={styles.image}
            />
          </View>
      ) : (
        <View style={styles.iconContainer}>
          <MaterialIcons name={icon} size={40} color={Colors.dpIcon} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicContainer: {
    width: 60,
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    resizeMode: "stretch",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: Colors.dpBackground,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfilePic;
