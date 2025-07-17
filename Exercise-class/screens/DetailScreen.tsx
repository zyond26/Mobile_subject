import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

type DetailScreenProps = {
    id?: string;
}

export default function DetailScreen({ router }: { router: { params: DetailScreenProps } }) {
    const navigation = useNavigation()
    const { id } = router.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DetailScreen</Text>
            <Text>ID:{id}</Text>
            <Text>{id}</Text>
            <Pressable onPress={() => navigation.goBack()} style={styles.button}>
                <Text>goBack</Text>
            </Pressable>
            <Pressable onPress={() => navigation.push('Detail')} style={styles.button}>
                <Text>pushBack</Text>
            </Pressable>
            <Pressable onPress={() => navigation.popToTop()} style={styles.button}>
                <Text>popToTop Home</Text>
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
        alignItems: 'center'
    }
})