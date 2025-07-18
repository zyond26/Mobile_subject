import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize as rf } from 'react-native-responsive-dimensions'

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.headingContainer}>
                <Text style={styles.bmiText}> BMI Calculator</Text>
            </View>

            <View styles={styles.genderContaiiner}>
                <TouchableOpacity style={styles.genderBox}>
                    <Image uri='https://tse1.mm.bing.net/th/id/OIP.CX-YHHGYvWVeQlDrDwA6gwHaHa?pid=Api&P=0&h=180' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.genderBox}>
                    <Image uri='https://tse1.mm.bing.net/th/id/OIP.fjRILipQOlcJX_SqXEgUdgHaHa?pid=Api&P=0&h=180' />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101538'
    },
    headingContainer: {
        marginTop: 50,
        width: '100%',
        padding: 10,
        backgroundColor: '#272840'
    },
    bmiText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: rf(2.5)
    },
    genderContaiiner: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    genderBox: {
        backgroundColor: '#28284E',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10
    }
})
