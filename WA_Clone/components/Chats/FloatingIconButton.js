import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

const FloatingIconButton = ({
  iconName,
  size,
  iconColor,
  onPress,
  style,
  image, 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.7}
    >
      {iconName && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={iconName} size={size} color={iconColor} />
        </View>
      )}
      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  }
});

export default FloatingIconButton;
