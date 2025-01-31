import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { getCurrentUser, logout } from "../../lib/appwrite"; // Adjust the path accordingly
import { useRouter } from "expo-router"; // Import the useRouter hook
import * as ImagePicker from "expo-image-picker"; // For image upload

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const router = useRouter();

  // Fetch current user when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setUserName(currentUser.name);
      setBio(currentUser.bio || ""); // Default bio if none is set
      setProfilePic(currentUser.profilePic); // Set current profile picture
    };
    fetchUser();
  }, []);

  // Handle image picker
  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission required to access photos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/(auth)/sign-in"); // Redirect to sign-in page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Handle profile update
  const handleUpdateProfile = () => {
    // Update profile logic using Appwrite or other backend services
    alert("Profile updated successfully!");
  };

  return (
    <ScrollView className="flex-1 p-6 bg-gray-50">
      <View className="text-center mb-8">
        <Text className="text-3xl font-semibold text-indigo-700">Welcome, {user ? user.name : 'User'}!</Text>
        <Text className="text-lg text-gray-600 mt-2">
          You're shaping the digital world. Here's where you can fine-tune your profile to reflect your unique journey.
        </Text>
      </View>

      {/* Profile Image */}
      <TouchableOpacity onPress={handleImagePick}>
        <View className="flex items-center mb-6">
          <Image
            source={profilePic ? { uri: profilePic } : require("../../assets/images/react.png")}
            className="w-32 h-32 rounded-full border-4 border-indigo-600"
          />
          <Text className="text-lg mt-2 text-indigo-600 font-semibold">Change Profile Picture</Text>
        </View>
      </TouchableOpacity>

      {/* Name */}
      <View className="mb-6">
        <Text className="text-lg text-gray-800">Full Name</Text>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          placeholder="Enter your full name"
          className="p-4 mt-2 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        />
      </View>

      {/* Email (Non-editable) */}
      <View className="mb-6">
        <Text className="text-lg text-gray-800">Email</Text>
        <TextInput
          value={user?.email || ''}
          placeholder="Enter your email"
          className="p-4 mt-2 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
          editable={false} // Email should be non-editable
        />
      </View>

      {/* Bio */}
      <View className="mb-6">
        <Text className="text-lg text-gray-800">Bio</Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="A short bio about yourself"
          multiline
          className="p-4 mt-2 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity
        className="bg-indigo-600 p-4 rounded-lg shadow-lg"
        onPress={handleUpdateProfile}
      >
        <Text className="text-white text-center text-lg font-semibold">Update Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <View className="mt-6">
        <Button title="Logout" onPress={handleLogout} />
      </View>

      {/* Motivational Section */}
      <View className="mt-8 p-4 bg-blue-100 rounded-lg">
        <Text className="text-lg text-center text-indigo-800 font-semibold">
          ** You're On a Journey! **
        </Text>
        <Text className="text-center text-gray-600 mt-2">
          Every step you take, you get closer to becoming your best self. Keep updating your profile to reflect your growth, skills, and passions. The world is watching your transformation.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
