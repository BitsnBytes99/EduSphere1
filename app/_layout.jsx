import "../global.css";
import React from "react";
import { Stack } from "expo-router";
import GlobalProvider from "@/context/GlobalProvider";

export default function Rootlayout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(userTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(ExploreEvents)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(adminTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(Hostels)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}
