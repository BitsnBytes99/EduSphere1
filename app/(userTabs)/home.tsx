import { router } from "expo-router";
import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";

const Home = () => {
  
  return (
    <ImageBackground
      source={require("../../assets/images/blank.jpg")} // Your Background Image
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 justify-center items-center bg-black/50 px-5">
        <Text className="text-white text-3xl font-extrabold mb-8 tracking-wide">
          Welcome Home
        </Text>

        {/* 2×2 Grid Layout */}
        <View className="grid grid-cols-2 gap-6">
          <TouchableOpacity
            onPress={() => router.push("/(ExploreEvents)/events")}
            className="w-36 h-20 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center"
          >
            <Text className="text-white font-semibold text-lg">Explore Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert("Create & Join Groups", "Navigate to Create & Join Groups")}
            className="w-36 h-20 bg-green-600 rounded-xl shadow-lg flex items-center justify-center"
          >
            <Text className="text-white font-semibold text-lg">Create & Join Groups</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert("College Clubs", "Navigate to College Clubs")}
            className="w-36 h-20 bg-purple-600 rounded-xl shadow-lg flex items-center justify-center"
          >
            <Text className="text-white font-semibold text-lg">College Clubs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(AIBot)/chatbot")}
            className="w-36 h-20 bg-red-600 rounded-xl shadow-lg flex items-center justify-center"
          >
            <Text className="text-white font-semibold text-lg">AI BOT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
