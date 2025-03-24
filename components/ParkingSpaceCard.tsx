import { Fontisto, SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, ImageProps, Pressable, StyleSheet, Text, View } from 'react-native';
import { BookNowBtn } from './buttons/BookNowBtn';
import { FavoriteBtn } from './buttons/FavoriteBtn';

interface Props {
  id: string;
  title: string;
  address: string;
  description: string;
  controlprice_per_hour: number;
  distance_miles: number;
  host_rating: number;
  image_url: ImageProps | undefined;
  amenities: string;
  isBooking: boolean;
  onPressBookNow: () => void;
}

export const ParkingSpaceCard = ({
  id,
  title,
  address,
  description,
  controlprice_per_hour,
  distance_miles,
  host_rating,
  image_url,
  amenities,
  isBooking,
  onPressBookNow,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <View style={styles.container} id={id}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} resizeMode="contain" source={image_url} />
      </View>
      <View style={styles.row1}>
        <Text style={styles.title}>{title}</Text>
        <FavoriteBtn isFavorite={isFavorite} onPress={() => setIsFavorite(!isFavorite)} />
      </View>
      <View style={styles.row2}>
        <Text style={styles.boldText}>{address}</Text>
        <View style={styles.distance}>
          <SimpleLineIcons name="location-pin" size={18} color="black" />
          <Text style={styles.boldText}>{distance_miles} mi</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <Text style={styles.boldText}>Host Rating {host_rating} </Text>
        <Fontisto name="star" size={18} color="black" />
      </View>
      <View style={styles.row4}>
        <Text style={styles.boldText}>
          Price Per Hour <Text style={styles.text}>${controlprice_per_hour}</Text>
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.boldText} numberOfLines={isDescriptionVisible ? undefined : 1}>
          Description: <Text style={styles.text}>{description}</Text>
        </Text>
      </View>
      <Pressable
        onPress={() => setIsDescriptionVisible(!isDescriptionVisible)}
        style={styles.showMoreLessBtn}>
        <Text>{isDescriptionVisible ? 'Show Less' : 'Show More'}</Text>
      </Pressable>
      <BookNowBtn isLoading={isBooking} onPress={onPressBookNow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 10,
  },
  imgContainer: {
    height: 235,
    width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row3: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row4: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  distance: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 8,
  },
  boldText: {
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
  },
  showMoreLessBtn: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
