import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

export default function DieuScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DieuScreen</Text>
            <Pressable onPress={() => navigation.navigate('CreateDieu')} style={styles.button}
            >
                <Text>Create Dieu</Text>
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
        margin: 10,
        alignItems: 'center'
    }
});