import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodScreen from './screens/FoodScreen'
import DetailFoodScreen from './screens/DetailFoodScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FoodScreen">
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
        <Stack.Screen name="DetailFoodScreen" component={DetailFoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
