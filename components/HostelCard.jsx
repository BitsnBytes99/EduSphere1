import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';  // Import useRouter from expo-router

const HostelCard = ({ data }) => {
  const [isSaved, setIsSaved] = useState(false);
  const router = useRouter();  // Call useRouter to get access to navigation

  const handleSaveUnsave = () => {
    setIsSaved(!isSaved); // Toggle saved state
  };

  const handlePress = () => {
    router.push('/(Hostels)/hostelist');  // Use router.push to navigate to the hostelist page
  };

  return (
    <SafeAreaView style={{ width: 192, height: 288, margin: 8 }}> {/* Adjusted size of card */}
      <TouchableOpacity onPress={handlePress} style={{ flexDirection: 'column', alignItems: 'center', padding: 16 }}>
        <View style={{ width: '100%', height: 160, borderRadius: 16, overflow: 'hidden' }}>
          <Image
            source={{ uri: data.thumbnail }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 8 }}>
        <Text style={{ fontWeight: '600', fontSize: 16, color: 'white', textAlign: 'center' }} numberOfLines={1}>
          {data.title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HostelCard;
