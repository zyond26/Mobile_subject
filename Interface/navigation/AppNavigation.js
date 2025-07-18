import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BMIResultScreen from '../screens/BMIResultScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="BMIResultScreen" component={BMIResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}