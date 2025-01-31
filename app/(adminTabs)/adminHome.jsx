import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { uploadPoster, createEvent } from "../../lib/appwrite"; // Import backend functions
import DateTimePicker from '@react-native-community/datetimepicker'; // DatePicker and TimePicker component

const AdminPage = () => {
  const [eventName, setEventName] = useState("");
  const [clubName, setClubName] = useState("");
  const [date, setDate] = useState(new Date()); // Default to current date
  const [time, setTime] = useState(new Date()); // Default to current time
  const [venue, setVenue] = useState("");
  const [poster, setPoster] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false); // Controls visibility of the date picker
  const [showTimePicker, setShowTimePicker] = useState(false); // Controls visibility of the time picker

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPoster(result.assets[0].uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleSubmit = async () => {
    if (!poster || !eventName || !clubName || !date || !time || !venue) {
      alert("Please fill all fields and upload a poster.");
      return;
    }

    try {
      // 1️⃣ Upload the event poster
      const posterId = await uploadPoster(poster);

      // 2️⃣ Save event details to the database
      await createEvent({
        eventName,
        clubName,
        date: date.toISOString(), // Convert to string for storage
        time: time.toISOString(), // Convert to string for storage
        venue,
        posterId,
      });

      alert("Event created successfully!");
    } catch (error) {
      alert("Error creating event: " + error.message);
    }
  };

  return (
    <ScrollView className="flex-1 p-6 bg-gray-100">
      <View className="mb-8">
        <Text className="text-3xl font-semibold text-center text-indigo-700">Admin Panel</Text>
        <Text className="text-lg text-center text-gray-600 mt-2">Create a new event by filling in the details below</Text>
      </View>

      <TextInput
        className="mt-4 p-4 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        className="mt-4 p-4 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        placeholder="Club Name"
        value={clubName}
        onChangeText={setClubName}
      />

      {/* Date Picker */}
      <TouchableOpacity
        className="mt-4 p-4 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        onPress={() => setShowDatePicker(true)}
      >
        <Text className="text-lg">{date ? date.toDateString() : "Select Date"}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Time Picker */}
      <TouchableOpacity
        className="mt-4 p-4 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        onPress={() => setShowTimePicker(true)}
      >
        <Text className="text-lg">{time ? time.toLocaleTimeString() : "Select Time"}</Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <TextInput
        className="mt-4 p-4 rounded-lg border-2 border-gray-300 bg-white text-lg shadow-sm"
        placeholder="Venue"
        value={venue}
        onChangeText={setVenue}
      />

      <TouchableOpacity
        className="mt-6 bg-indigo-500 p-3 rounded-lg shadow-lg"
        onPress={handleImagePick}
      >
        <Text className="text-white text-center text-lg font-semibold">Pick Event Poster</Text>
      </TouchableOpacity>

      {poster && (
        <Image
          source={{ uri: poster }}
          className="mt-6 w-40 h-40 rounded-xl shadow-lg mx-auto"
        />
      )}

      <TouchableOpacity
        className="mt-8 bg-green-500 p-4 rounded-lg shadow-lg"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center text-lg font-semibold">Submit Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AdminPage;