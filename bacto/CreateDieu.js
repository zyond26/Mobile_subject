import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

export default function CreateDieu() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>CreateDieu</Text>
            <Pressable onPress={() => navigation.popToTop()} style={styles.button}>
                <Text>go to home</Text>
            </Pressable>
            <Pressable onPress={() => navigation.push('Detail')} style={styles.button}>
                <Text>Push Detail</Text>
            </Pressable>
            <Pressable onPress={() => navigation.popTo('Dieu')} style={styles.button}>
                <Text>Pop to Dieu</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'yellow',
        padding: 10,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    }
});