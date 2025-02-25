import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CallItem = ({ name, profilePic, callType, callTime, isVideoCall }) => {
  const getCallIcon = () => {
    if (callType === "missed") return <MaterialIcons name="call-missed" size={18} color="red" />;
    if (callType === "incoming") return <MaterialIcons name="call-received" size={18} color="green" />;
    return <MaterialIcons name="call-made" size={18} color="blue" />;
  };

  return (
    <View style={styles.callItem}>
      <Image source={{ uri: profilePic }} style={styles.profilePic} />
      <View style={styles.callInfo}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.callDetails}>
          {getCallIcon()}
          <Text style={styles.callTime}>{callTime}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.callIcon}>
        <Ionicons name={isVideoCall ? "videocam" : "call"} size={24} color={Colors.backgroundWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  callInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  callDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 3,
  },
  callTime: {
    color: "gray",
    fontSize: 14,
  },
  callIcon: {
    padding: 8,
    borderRadius: 50,
  },
});

export default CallItem;