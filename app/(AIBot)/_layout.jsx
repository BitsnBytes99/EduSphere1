import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  KeyboardAvoidingView, 
  Platform, 
  Image, 
  ActivityIndicator 
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

export const aimlapikey = Constants.expoConfig.extra.aimlapikey; 

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl = require('../../assets/images/react.png'); // Replace with appropriate image for your app

  const BASE_URL = "https://api.aimlapi.com/v1";
  const API_KEY = "c47018ee2ec7435ba96388073ed4c791";
  
  // Updated system prompt for campus challenge event notifications
  const SYSTEM_PROMPT = "I am a chatbot that helps you stay updated on campus challenge events and notifications. How can I assist you with upcoming events?";

  const MODEL_ID = "mistralai/Mistral-7B-Instruct-v0.2";

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const payload = {
        model: MODEL_ID,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: input },
        ],
        temperature: 0.7,
        max_tokens: 256,
      };

      const response = await axios.post(
        `${BASE_URL}/chat/completions`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data?.choices[0]?.message?.content || "Sorry, I couldn't process that.";
      const botMessage = { role: "bot", content: botResponse };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error.response?.data || error.message);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Oops! Something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.role === "user";
    return (
      <View
        style={{
          alignSelf: isUser ? "flex-end" : "flex-start",
          backgroundColor: isUser ? "#3b82f6" : "#e5e7eb",
          padding: 10,
          marginVertical: 5,
          borderRadius: 20,
          maxWidth: "80%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {!isUser && (
          <Image
            source={imageUrl}
            style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }}
          />
        )}
        <Text style={{ color: isUser ? "white" : "black", maxWidth: "80%" }}>{item.content}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#f5f5f5" }}
    >
      <View
        style={{
          backgroundColor: "#3b82f6",
          alignSelf: "center",
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 20,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Challenge Events
        </Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10, paddingBottom: 20 }}
        style={{ flexGrow: 1 }}
      />

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10, borderTopWidth: 1, borderTopColor: "#e5e7eb" }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          style={{
            flex: 1,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: "#ddd",
            backgroundColor: "#f9fafb",
          }}
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={isLoading}
          style={{
            backgroundColor: "#3b82f6",
            paddingHorizontal: 20,
            paddingVertical: 12,
            marginLeft: 10,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatbotScreen;
