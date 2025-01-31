import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import HostelCard from '../../components/HostelCard'; // Import the HostelCard component

const hostelData = [
  {
    hostelId: '1',
    title: 'Shree Hostel',
    thumbnail: 'https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg',
    fees: '₹5000/month',
    description: 'Comfortable stay with all basic amenities.',
    amenities: 'Wi-Fi, 24/7 water, AC rooms',
    mapLink: 'https://maps.google.com/?q=Shree+Hostel',
  },
  {
    hostelId: '2',
    title: 'Ravi Hostel',
    thumbnail: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1655449720/Website/CMS-Uploads/pxddpbyl4r0nufzqztdk.jpg',
    fees: '₹4500/month',
    description: 'Spacious rooms with a peaceful environment.',
    amenities: 'Wi-Fi, Hot Water, Study Room',
    mapLink: 'https://maps.google.com/?q=Ravi+Hostel',
  },
  // Add more hostels as needed
];

const HostelPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        {hostelData.map((hostel, index) => (
          <View key={index} style={styles.hostelCard}>
            <Image source={{ uri: hostel.thumbnail }} style={styles.thumbnail} />
            <View style={styles.hostelInfo}>
              <Text style={styles.hostelTitle}>{hostel.title}</Text>
              <Text style={styles.hostelDescription}>{hostel.description}</Text>
              <Text style={styles.hostelAmenities}>Amenities: {hostel.amenities}</Text>
              <Text style={styles.hostelFees}>Fees: {hostel.fees}</Text>
              <Text style={styles.hostelLink}>View on Map: <Text style={styles.link} onPress={() => { Linking.openURL(hostel.mapLink); }}>Click Here</Text></Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  hostelCard: {
    marginBottom: 20,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hostelInfo: {
    padding: 10,
  },
  hostelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  hostelDescription: {
    color: '#ccc',
    marginTop: 5,
  },
  hostelAmenities: {
    color: '#ccc',
    marginTop: 5,
  },
  hostelFees: {
    color: '#fff',
    marginTop: 5,
  },
  hostelLink: {
    color: '#3498db',
    marginTop: 5,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default HostelPage;
