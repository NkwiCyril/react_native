import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const BottomMessage = () => {
  return (
    <View style={styles.bottom}>
      <Ionicons name="lock-closed" color={"gray"} size={12} />
      <Text style={styles.bottomText}>
        Your personal messages are{" "}
        <Text style={{ color: Colors.whatsAppGreen }}>
          end-to-end encrypted
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    gap: 2,
  },

  bottomText: {
    color: "gray",
    fontSize: 12,
  },
});

export default BottomMessage;
