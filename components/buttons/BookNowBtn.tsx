import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  isLoading: boolean;
  onPress: () => void;
}

export const BookNowBtn = ({ isLoading, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Book Now</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
