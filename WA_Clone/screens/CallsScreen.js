import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";
import CallItem from "../components/Phones/CallItem";
import { calls } from "../data";

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={calls}
        renderItem={({ item }) => <CallItem {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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
    borderBottomColor: "gray",
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

export default CallsScreen;
