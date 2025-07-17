import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const DetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { id } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DetailScreen</Text>
            <Text>ID: {id}</Text>
            <Text>{id}</Text>
            <Pressable onPress={() => navigation.navigate('Detail')} style={styles.button}>
                <Text>Go to Detail</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text>Go to Home</Text>
            </Pressable>
        </View>
    )
}

{/* <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Pressable onPress={() => navigation.push('home')} style={styles.button}>
                <Pressable onPress={() => navigation.goBack()} style={styles.button}>

                {/* go back là quay lại
                navigate là chuyển đến màn hình khác
                push là thêm màn hình vào stack
                popToTop là quay lại màn hình đầu tiên
                */}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'yellow',
        padding: 10,
        width: 100,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center'
    }
})