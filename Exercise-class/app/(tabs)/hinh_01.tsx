import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, StatusBar } from "react-native";
import React, { useState } from 'react';


// // *****************************************************************
// // --------------------------Btap 1: basic UI ------------------------------
// // *****************************************************************


// export default function App() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.card}>
//                 <Image
//                     source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//                     style={styles.logo}
//                 />
//                 <Text style={styles.text}>Hello to react native!</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//         paddingTop: 60,
//         paddingHorizontal: 20,
//     },
//     card: {
//         backgroundColor: '#d3d3d3',
//         padding: 20,
//         borderRadius: 15,
//         borderWidth: 2,
//         borderColor: 'black',
//         alignItems: 'flex-start',
//         width: '100%',
//     },
//     logo: {
//         width: 80,
//         height: 80,
//         marginBottom: 8,
//     },
//     text: {
//         fontSize: 18,
//         fontWeight: '600',
//     },
// });


export function App1() {
    return (
        <View style={stylesApp.container}>
            <StatusBar barStyle="dark-content" />
            <View style={stylesApp.card}>
                <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={stylesApp.logo}
                />
                <Text style={stylesApp.text}>Hello to react native!</Text>
            </View>
        </View>


    );
}
const stylesApp = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#d3d3d3', // nền xám nhạt
        padding: 20,
        borderRadius: 15,
        borderWidth: 2,             // bo viền
        borderColor: 'black',       // màu viền đen
        alignItems: 'flex-start',   // căn trái
        width: '100%',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 8,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
    },
});