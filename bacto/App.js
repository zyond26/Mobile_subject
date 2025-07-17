
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import DieuScreen from "./DieuScreen";
import CreateDieu from "./CreateDieu";
import { NavigationContainer } from "@react-navigation/native";

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true, headerTintColor: 'white', headerStyle: { backgroundColor: 'green' } }}>

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeTown' }} />
        <Stack.Screen name="Detail" component={() => <DetailScreen />} />
        <Stack.Screen name="Dieu" component={() => <DieuScreen />} options={{ title: 'Dieu Screen' }} />
        <Stack.Screen name="CreateDieu" component={CreateDieu} options={{ title: 'Create Dieu' }} />
        <BottomTab.Screen name="CreateDieu" component={CreateDieu} options={{ title: 'Create Dieu' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <RootStack />
  );
}

