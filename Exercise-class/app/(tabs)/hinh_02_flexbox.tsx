
// import { View } from "react-native";


// // // * ====================================================
// // //   2. CÁC DEMO FLEXBOX
// // //   ==================================================== */


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
//                 <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>

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
//                 <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
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
//                 <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
//                 <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * FlexBox: Demo các thuộc tính flexDirection và justifyContent
 */
export default function FlexBox() {
    return (
        <View style={styles.container}>
            {/* FlexBox1: Demo flexDirection row cơ bản */}
            <View>
                <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 3 }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
                </View>
            </View>

            {/* FlexBox2: Demo justifyContent: 'center' */}
            <View>
                <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 3, justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>

                </View>
            </View>

            {/* FlexBox3: Demo justifyContent: 'flex-end' */}
            <View>
                <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 3, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
                </View>
            </View>

            {/* FlexBox4: Demo justifyContent: 'space-around' */}
            <View>
                <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 3, justifyContent: 'space-around' }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
                </View>
            </View>

            {/* FlexBox5: Demo justifyContent: 'space-between' */}
            <View>
                <View style={{ flexDirection: 'row', borderWidth: 3, borderColor: '#666', height: 120, margin: 3, justifyContent: 'space-between' }}>
                    <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}></View>
                    <View style={{ backgroundColor: 'green', width: 50, height: 50 }}></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Nền trắng
        padding: 10,
        marginTop: 50
    },
    section: {
        marginBottom: 20,
    },
    box: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#666',
        height: 120,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    itemRed: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
    },
    itemBlue: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
    },
    itemGreen: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
    },
});