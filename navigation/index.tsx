import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ParkingSpacesScreen from 'screens/ParkingSpacesScreen';

export type RootStackParamList = {
  ParkingSpaces: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ParkingSpaces">
        <Stack.Screen name="ParkingSpaces" component={ParkingSpacesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
