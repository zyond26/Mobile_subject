
import React from "react";

const Stack = createNativeStackNavigator();

import { FlexBox, FlexBox2, FlexBox3, FlexBox4, FlexBox5 } from "./hinh_02_flexbox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import DetailScreen from "@/screens/DetailScreen";

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true, headerTintColor: 'white', headerStyle: { backgroundColor: 'green' } }}>

      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeTown' }} />
      <Stack.Screen name="Detail" component={() => <DetailScreen />} />
    </Stack.Navigator>
  );
}

export default function Index() {
  return (
    <RootStack />
  );
}
