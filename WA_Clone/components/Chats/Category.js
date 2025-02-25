import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const Category = ({ name, label, labelColor, isSelected }) => {
  return (
    <View style={styles.container}>
      {label && <MaterialIcons name="label" color={labelColor} size={17} />}
      <Text style={[styles.name, isSelected && styles.selectedText]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: Colors.categoryBackground,
    marginRight: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    color: "gray",
    fontWeight: "400",
    fontSize: 15,
  },
  selectedText: {
    color: "white",
  },
});

export default Category;
