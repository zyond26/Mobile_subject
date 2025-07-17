import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Detail: { id: string };
};

type HomeScreenProps = {
    id?: string;
}
export default function HomeScreen(router: HomeScreenProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HomeScreen</Text>
            <Pressable onPress={() => navigation.navigate('Detail', { id: '123' })} style={styles.button}
            >
                <Text>Detail</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'yellow',
        padding: 10,
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
    }
})