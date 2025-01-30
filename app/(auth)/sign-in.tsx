import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-4">Sign In</Text>

      <TextInput
        placeholder="Email"
        className="border border-gray-300 rounded-lg w-full p-3 mb-3"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border border-gray-300 rounded-lg w-full p-3 mb-3"
      />

      <TouchableOpacity className="bg-blue-500 w-full py-3 rounded-lg">
        <Text className="text-white text-center font-semibold">Sign In</Text>
      </TouchableOpacity>

      {/* Navigate to Sign Up */}
      <TouchableOpacity className="mt-3" onPress={() => router.push('/(auth)/signup')}>
        <Text className="text-blue-500">Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
