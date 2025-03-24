import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { ParkingSpaceCard } from 'components/ParkingSpaceCard';

const data = {
  id: '123',
  title: 'Convenient Downtown Parking',
  address: '123 Main St, San Francisco, CA',
  description:
    'Secure parking space in well-lit garage. Easy access to downtown attractions and public transit. Available 24/7 with controlprice_per_hour: 12.50',
  controlprice_per_hour: 12.5,
  distance_miles: 0.3,
  host_rating: 4.7,
  image_url:
    'https://minutemedia-ressh.cloudinary.com/image/upload/v1644411466/shape/cover/sport/503014-istock-636444638-08cc3c48c6d880669ec7b80f20ac9c83.jpg',
  amenities: ['Covered', 'Security Camera', '24/7 Access'],
};

export default function ParkingSpacesScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingId, setBookingId] = useState('0');
  const [parkingSpaces, setParkingSpaces] = useState([]);

  useEffect(() => {
    getParkingSpaces();
  }, []);

  const getParkingSpaces = () => {
    const array = [];
    setTimeout(() => {
      array.push(data);
      setIsLoading(false);
      setParkingSpaces(array);
    }, 3000);
  };

  const bookNow = (id: string, title: string) => {
    setBookingId(id);
    setTimeout(() => {
      setBookingId('0');
      Alert.alert('Congratulations', `You're parking spot for ${title} has been booked.`, [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="#000" />
          <Text>Loading Parking Spaces</Text>
        </View>
      ) : (
        <FlatList
          data={parkingSpaces}
          renderItem={({ item }) => (
            <ParkingSpaceCard
              id={item.id}
              title={item.title}
              address={item.address}
              description={item.description}
              controlprice_per_hour={item.controlprice_per_hour}
              distance_miles={item.distance_miles}
              host_rating={item.host_rating}
              image_url={{
                uri: item.image_url,
              }}
              amenities={item.amenities}
              isBooking={bookingId == item.id}
              onPressBookNow={() => bookNow(item.id, item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
