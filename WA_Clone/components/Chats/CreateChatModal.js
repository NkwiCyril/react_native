import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { supabase } from '../../utils/supabase';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const CreateChatModal = ({ 
  isVisible, 
  onClose, 
  onChatCreated 
}) => {
  const [chatName, setChatName] = useState('');
  const [chatType, setChatType] = useState('Personal');
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleCreateChat = async () => {
    // Validate inputs
    if (!chatName.trim()) {
      Alert.alert('Error', 'Please enter a chat name');
      return;
    }

    setIsLoading(true);
    try {
      // Upload profile image if exists
      let imageUrl = null;
      if (profileImage) {
        const fileExt = profileImage.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('chat-profile-pics')
          .upload(filePath, await (await fetch(profileImage)).blob());

        if (uploadError) {
          throw uploadError;
        }

        const { data: { publicUrl }, error: urlError } = supabase.storage
          .from('chat-profile-pics')
          .getPublicUrl(filePath);

        if (urlError) {
          throw urlError;
        }

        imageUrl = publicUrl;
      }

      // Insert new chat
      const { data, error } = await supabase
        .from('chats')
        .insert({
            
          name: chatName.trim(),
          profilePic: imageUrl,
          group: chatType === 'group',
          created_at: new Date().toISOString(),
          unreadMessages: 0,
          lastMessage: 'New chat created',
          lastMessageDatetime: new Date().toISOString(),
        })
        .select();

      if (error) {
        throw error;
      }

      // Reset form and close modal
      onChatCreated(data[0]);
      resetForm();
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to create chat');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setChatName('');
    setChatType('personal');
    setProfileImage(null);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create New Chat</Text>

          {/* Profile Image Picker */}
          <TouchableOpacity 
            style={styles.imagePicker} 
            onPress={pickImage}
          >
            {profileImage ? (
              <Image 
                source={{ uri: profileImage }} 
                style={styles.profileImage} 
              />
            ) : (
              <MaterialIcons 
                name="add-photo-alternate" 
                size={50} 
                color={Colors.textWhite} 
              />
            )}
          </TouchableOpacity>

          {/* Chat Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter chat name"
            placeholderTextColor={Colors.textGray}
            value={chatName}
            onChangeText={setChatName}
          />

          {/* Chat Type Selection */}
          <View style={styles.chatTypeContainer}>
            <TouchableOpacity
              style={[
                styles.chatTypeButton,
                chatType === 'personal' && styles.selectedChatType
              ]}
              onPress={() => setChatType('personal')}
            >
              <Text style={styles.chatTypeText}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chatTypeButton,
                chatType === 'group' && styles.selectedChatType
              ]}
              onPress={() => setChatType('group')}
            >
              <Text style={styles.chatTypeText}>Group</Text>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={resetForm}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button, 
                styles.createButton,
                isLoading && styles.disabledButton
              ]}
              onPress={handleCreateChat}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? 'Creating...' : 'Create Chat'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: Colors.darkBackground,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textWhite,
    marginBottom: 20,
  },
  imagePicker: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.textGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.backgroundGray,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: Colors.textWhite,
    marginBottom: 15,
  },
  chatTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  chatTypeButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: Colors.backgroundGray,
    alignItems: 'center',
  },
  selectedChatType: {
    backgroundColor: Colors.whatsAppGreen,
  },
  chatTypeText: {
    color: Colors.textWhite,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: Colors.textGray,
  },
  createButton: {
    backgroundColor: Colors.whatsAppGreen,
  },
  buttonText: {
    color: Colors.textWhite,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default CreateChatModal;