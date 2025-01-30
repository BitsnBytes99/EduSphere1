import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-64 p-4 bg-white/10 border border-white/20 backdrop-blur-md 
                 rounded-xl shadow-lg items-center mb-5"
    >
      <Text className="text-white font-semibold text-lg tracking-wide">{title}</Text>
    </TouchableOpacity>
  );
}
