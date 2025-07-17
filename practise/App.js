import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen';
import DetailsScreen from './component/DetailsScreen';
import Movie from './component/Movie';
import Film from './component/Film'; // Assuming Film is another screen you want to include

const Stack = createNativeStackNavigator();

function RootNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#fff' }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="Movie" component={Movie} />
        <Stack.Screen name="Film" component={Film} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
