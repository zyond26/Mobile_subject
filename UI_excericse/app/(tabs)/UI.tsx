import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React, { useState } from 'react';


// *****************************************************************
// --------------------------Btap 1: basic UI ------------------------------
// *****************************************************************


// export function Btap1() {
//     return (
//         <View style={styles.container}> {/* Thêm container bao ngoài */}
//             <View style={styles.vien}>
//                 <Image
//                     source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//                     style={{ width: 50, height: 50, backgroundColor: 'white' }}
//                 />
//                 <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Hello to React Native!</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         position: 'fixed',
//         backgroundColor: 'white'
//     },
//     vien: {
//         borderWidth: 3,
//         borderColor: '#000',
//         padding: 10,
//         margin: 10,
//         borderRadius: 25,
//         backgroundColor: '#ccc'
//     },
// });

// // * ====================================================
// //   2. CÁC DEMO FLEXBOX
// //   ==================================================== */


// /**
//  * FlexBox: Demo flexDirection row cơ bản
//  */
// export function FlexBox() {
//     return (
//         <View>
//             <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 10 }}>
//                 <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
//             </View>
//         </View>
//     );
// }

// /**
//  * FlexBox2: Demo justifyContent: 'center'
//  */
// export function FlexBox2() {
//     return (
//         <View>
//             <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 10, justifyContent: 'center' }}>
//                 {/* Các View con giống FlexBox */}
//             </View>
//         </View>
//     );
// }

// /**
//  * FlexBox3: Demo justifyContent: 'flex-end'
//  */
// export function FlexBox3() {
//     return (
//         <View>
//             <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 10, justifyContent: 'flex-end' }}>
//                 {/* Các View con giống FlexBox */}
//             </View>
//         </View>
//     );
// }

// /**
//  * FlexBox4: Demo justifyContent: 'space-around'
//  */
// export function FlexBox4() {
//     return (
//         <View>
//             <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 10, justifyContent: 'space-around' }}>
//                 {/* Các View con giống FlexBox */}
//             </View>
//         </View>
//     );
// }

// /**
//  * FlexBox5: Demo justifyContent: 'space-between'
//  */
// export function FlexBox5() {
//     return (
//         <View>
//             <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 10, justifyContent: 'space-between' }}>
//                 <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
//             </View>
//         </View>
//     );
// }



// // * ====================================================
// //   3. COMPONENT FORM & TƯƠNG TÁC
// //   ==================================================== */

// /**
//  * Caculator: Giao diện máy tính BMI đơn giản
//  * - Bao gồm 2 TextInput cho weight/height
//  * - Button để tính toán
//  */
// export function Caculator() {
//     return (
//         <View style={styles.border}>
//             <View>
//                 <View>
//                     <Text style={styles.label}>Weight (KG)</Text>
//                     <TextInput style={styles.input} keyboardType="numeric" />
//                 </View>
//                 <View>
//                     <Text style={styles.label}>Height (CM)</Text>
//                     <TextInput style={styles.input} keyboardType="numeric" />
//                 </View>
//                 <View>
//                     <Text style={styles.result}>BMI: 0.00</Text>
//                     <Button title="Compute" />
//                 </View>
//             </View>
//         </View>
//     );
// }
// // * ====================================================
// //  4. StopWatch UI
// //   ==================================================== */



export function StopwatchApp() {
    return (
        <View style={styles.container}>
            {/* Thời gian chính - vị trí trên cùng */}
            <Text style={styles.mainTime}>00:00.00</Text>

            {/* Nút Lap Start/Stop - căn giữa */}
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Lap Start/</Text>
                <Text style={styles.buttonText}>Stop</Text>
            </View>

            {/* Các lap hiển thị theo cặp số lap + thời gian */}
            <View style={styles.lapContainer}>
                <Text style={styles.lapLabel}>Lap #2</Text>
                <Text style={styles.lapTime}>01:10:23</Text>
            </View>

            <View style={styles.lapContainer}>
                <Text style={styles.lapLabel}>Lap #1</Text>
                <Text style={styles.lapTime}>01:05:11</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        alignItems: 'center',
    },
    mainTime: {
        fontSize: 60,
        fontWeight: '200',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    lapContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderColor: 'blacks'
    },
    lapLabel: {
        fontSize: 18,
    },
    lapTime: {
        fontSize: 18,
    },
});

/* ====================================================
  STYLE SHEET - Tái sử dụng cho toàn bộ component
  ==================================================== */

// const styles = StyleSheet.create({
//     box: {
//         padding: 15,
//         borderRadius: 10,
//         color: 'white',
//         backgroundColor: 'white'
//     },
//     text: {
//         color: 'white'
//     },
//     chu: {
//         fontSize: 20,
//         color: 'red',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         backgroundColor: 'white'
//     },
//     border: {
//         borderWidth: 1,
//         borderColor: 'white',
//         padding: 10,
//         margin: 10
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'white',
//         padding: 16,
//         margin: 10,
//         color: 'white'
//     },
//     label: {
//         marginRight: 100,
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white',
//         marginLeft: 10,
//         marginTop: 10
//     },
//     result: {
//         textAlign: 'center',
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white',
//         marginTop: 10,
//         marginBottom: 10,
//     },
// });