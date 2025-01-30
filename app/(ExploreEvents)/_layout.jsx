import React from 'react';
import { Stack } from 'expo-router';

const EventLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="events" options={{ headerShown: false }} />
    </Stack>
  );
};

export default EventLayout;


