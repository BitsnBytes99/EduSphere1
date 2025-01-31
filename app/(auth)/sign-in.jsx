import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { signIn } from "../../lib/appwrite"; // Import signIn function

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(email, password);
      router.replace("/(userTabs)/home"); // Navigate to home after login
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/signin.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 justify-center items-center bg-opacity-40 p-5 mt-30">
        <Text className="text-black text-3xl font-regular mb-7">Sign In</Text>

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
        <View className="w-full mb-6 bg-white border border-gray-300 rounded-lg flex-row items-center">
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

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={handleSignIn}
          className="w-60 p-4 bg-orange-300 rounded-lg items-center"
          disabled={isSubmitting}
        >
          <Text className="text-white font-semibold">
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        {/* Navigate to Sign Up */}
        <TouchableOpacity className="mt-3" onPress={() => router.push("/(auth)/signup")}>
          <Text className="text-blue-500">Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignIn;
