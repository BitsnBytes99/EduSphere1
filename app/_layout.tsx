import "../global.css";
import React from 'react'
import { Stack } from "expo-router";

export default function Rootlayout() {
  return (
   <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(userTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(ExploreEvents)" options={{ headerShown: false }} />
   </Stack>
  )
}