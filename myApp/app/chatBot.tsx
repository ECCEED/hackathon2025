// app/(tabs)/chat.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [userInput, setUserInput] = useState('');

  // Function to send a message (simulated response from chatbot)
  const sendMessage = () => {
    if (userInput.trim()) {
      // Add the user's message to the messages array
      setMessages([
        ...messages,
        { sender: 'user', message: userInput },
        { sender: 'chatbot', message: "Hello! How can I help you today?" }, 
      ]);
      setUserInput(''); // Clear input field
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat with Bot</Text>
      
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.sender === 'user' ? styles.userMessage : styles.chatbotMessage}>
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#0078d4',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0078d4',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: '80%',
  },
  chatbotMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: '80%',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#0078d4',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 8,
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
