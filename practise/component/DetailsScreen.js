import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = ({ route }) => {
    const navigation = useNavigation()
    const { id, name, age } = route.params || {};
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 50 }}>DetailsScreen</Text>
            <Text>ID: {id}</Text>
            <Text>Name::: {name}</Text>
            <Text>Age: {age}</Text>
            <Pressable onPress={() => navigation.goBack()} style={styles.button}>
                <Text>Go Back home</Text>
            </Pressable>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
})