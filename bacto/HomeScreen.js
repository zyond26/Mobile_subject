import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const array = [
    { id: 1, name: 'Dieu 1' },
    { id: 2, name: 'Dieu 2' },
    { id: 3, name: 'Dieu 3' }
];

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HomeScreen</Text>
            <FlatList
                data={array}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Detail', { id: item.id })} style={styles.button}>
                        <Text>{item.name}</Text>
                    </Pressable>
                )}
            />
            <Pressable onPress={() => navigation.navigate('Detail', { id: 1 })} style={styles.button}>
                <Text>Detail</Text>
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
        alignItems: 'center'
    }
});
