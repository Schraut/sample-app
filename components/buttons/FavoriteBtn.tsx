import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';

interface Props {
  isFavorite: boolean;
  onPress: () => void;
}

export const FavoriteBtn = ({ isFavorite, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={24} color="red" />
    </Pressable>
  );
};
