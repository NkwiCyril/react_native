// CustomHeader.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

const CustomHeader = ({ title, rightIcons }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.rightIconsContainer}>
        {rightIcons.map((icon, index) => (
          <Ionicons
            key={index}
            name={icon.name}
            size={icon.size || 24}
            color={icon.color || Colors.backgroundWhite}
            style={styles.icon}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.darkBackground,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 17,
    paddingBottom: 13,
    borderBottomWidth: 1,
  },

  headerTitle: {
    fontWeight: "500",
    fontSize: 27,
    color: Colors.textWhite,
  },
  rightIconsContainer: {
    flexDirection: "row",
    gap: 17
  },
  icon: {
    marginRight: 10,
  },
});

export default CustomHeader;