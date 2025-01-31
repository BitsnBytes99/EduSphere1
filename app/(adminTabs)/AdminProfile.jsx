import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import {  logout } from "../../lib/appwrite"; // Update with the correct path

const AdminProfile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/(auth)/sign-in"); // Redirect to sign-in page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Admin Profile</Text>
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
};

export default AdminProfile;
