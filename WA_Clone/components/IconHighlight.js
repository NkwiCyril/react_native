import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";

const IconHighlight = ({ children }) => {
  return (
    <View
      style={styles.highlight}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: Colors.iconHightlight,
    width: 60,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default IconHighlight;
