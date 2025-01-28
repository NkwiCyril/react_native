import { useState } from "react";
import { View, Modal, Button, Text } from "react-native";

export default function NewModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
        <Button title="Open modal" onPress={() => setIsModalVisible(true)} />

      {/* Modal */}
      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <View>
          <Text>This is a modal</Text>
          <Button title="Close modal" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
