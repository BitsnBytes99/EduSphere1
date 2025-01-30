import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, useRouter } from 'expo-router';

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-4">Sign Up</Text>

      <TextInput
        placeholder="Full Name"
        className="border border-gray-300 rounded-lg w-full p-3 mb-3"
      />
      <TextInput
        placeholder="Email"
        className="border border-gray-300 rounded-lg w-full p-3 mb-3"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border border-gray-300 rounded-lg w-full p-3 mb-3"
      />

      <TouchableOpacity className="bg-green-500 w-full py-3 rounded-lg">
        <Text className="text-white text-center font-semibold">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-3" onPress={() => router.push('/(auth)/sign-in')}>
        <Text className="text-blue-500">Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
