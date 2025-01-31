import React from 'react';
import { Stack } from 'expo-router';

const TeamLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="hostelist" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TeamLayout;