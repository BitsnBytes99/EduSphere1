// app/index.jsx
import React from "react";
import { View, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../components/CustomButton"; // Import the CustomButton

export default function WelcomePage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/Index.jpg")} // Background image path
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 items-center justify-end bg-opacity-40 m-20">
        {/* Get Started Button positioned near the bottom */}
        <CustomButton
          title="Get Started"
          onPress={() => router.push("/(auth)/signup")}
          buttonStyle="bg-orange-200 px-6 py-4 rounded-lg" // Custom button styles
          textStyle="text-black text-lg font-regular" // Custom text styles
        />
      </View>
    </ImageBackground>
  );
}
