import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 50 }}>HomeScreen</Text>
            <Pressable onPress={() => navigation.navigate('Details', { id: 26, name: 'Dieucute', age: 20 })}
                style={styles.button}>
                <Text>Go to Details</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Movie')} style={styles.button}>
                <Text>Go to Movie</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    }
})
