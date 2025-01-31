import React from "react";
import { View, ImageBackground, ActivityIndicator, Text } from "react-native";
import { useRouter, Redirect } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function WelcomePage() {
  const router = useRouter();
  const { isLoading, isLoggedIn, user } = useGlobalContext();

  // Handle redirection based on authentication state
  if (!isLoading) {
    if (isLoggedIn) {
      console.log(user);
      return user?.isAdmin ? (
        <Redirect href="/adminHome" />
      ) : (
        <Redirect href="/home" />
      );
    }
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <ImageBackground
        source={require("../assets/images/Index.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View className="flex-1 items-center justify-end bg-opacity-40 m-20">
          {/* Show loading indicator while checking authentication */}
          {isLoading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#ffffff" />
              <Text className="text-sm font-regular text-gray-100 mt-3 text-center">
                Loading...
              </Text>
            </View>
          ) : (
            <CustomButton
              title="Get Started"
              onPress={() => router.push("/(auth)/signup")}
              containerStyles="bg-orange-200 px-6 py-4 rounded-lg"
              textStyles="text-black text-lg font-regular"
            />
          )}
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}
