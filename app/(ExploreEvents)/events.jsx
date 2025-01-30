import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import React from "react";

const EventCard = ({ event }) => {
  return (
    <TouchableOpacity className="bg-white rounded-lg shadow-lg m-2 w-[95%]">
      <Image
        source={event.posterUrl}
        className="w-full h-40 rounded-t-lg"
        style={{
          resizeMode: "contain",
          backgroundColor: "black", // Full coverage of the card
        }}
      />
      <View className="p-3">
        <Text className="text-lg font-bold text-gray-800">{event.clubName}</Text>
        <Text className="text-gray-600 font-medium mt-2">Date: {event.date}</Text>
        <Text className="text-gray-600 font-medium">Time: {event.time}</Text>
        <Text className="text-gray-600 font-medium">Venue: {event.venue}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

const EventList = () => {
  // Temporary events data
  const events = [
    {
      posterUrl: require("../../assets/images/tech_poster.png"),
      clubName: "Tech Club",
      time: "5:00 PM",
      date: "2025-02-01",
      venue: "VIIT Auditorium",
    },
    {
      posterUrl: require("../../assets/images/music_poster.png"),
      clubName: "Music Club",
      time: "6:00 PM",
      date: "2025-02-10",
      venue: "VIIT Auditorium",
    },
    {
      posterUrl: require("../../assets/images/react.png"),
      clubName: "Art Club",
      time: "7:00 PM",
      date: "2025-02-15",
      venue: "VIIT Gallery",
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/blank.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
    <FlatList
      data={events}
      renderItem={({ item }) => <EventCard event={item} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ padding: 20 }}
      numColumns={1} // Display two cards per row
    />
    </ImageBackground>
  );
};

export default EventList;
