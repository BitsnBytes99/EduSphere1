import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/signin.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 justify-center items-center bg-opacity-40 p-5 mt-30">
        <Text className="text-black text-3xl font-regular mb-7">Sign Up</Text>

        {/* Email Input */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-lg"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <View className="w-full mb-4 bg-white border border-gray-300 rounded-lg flex-row items-center">
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            className="flex-1 p-4"
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} className="pr-4">
            <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={20} color="#7e7e7e" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View className="w-full mb-6 bg-white border border-gray-300 rounded-lg flex-row items-center">
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            className="flex-1 p-4"
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} className="pr-4">
            <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={20} color="#7e7e7e" />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={() => router.replace("/(userTabs)/home")}
          className="w-60 p-4 bg-green-500 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Sign Up</Text>
        </TouchableOpacity>

        {/* Navigate to Sign In */}
        <TouchableOpacity className="mt-3" onPress={() => router.push("/(auth)/sign-in")}>
          <Text className="text-blue-500">Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
