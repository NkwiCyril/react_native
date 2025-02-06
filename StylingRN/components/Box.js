import { StyleSheet, Text, View } from "react-native";

function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Box;
