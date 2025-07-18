

// // * ====================================================
// //  4. StopWatch UI
// //   ==================================================== */



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function StopwatchApp() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTime}>00:00.00</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Lap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Start/Stop</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lapContainer}>
                <Text style={styles.lapLabel}>Lap #2</Text>
                <Text style={styles.lapTime}>01:10.23</Text>
            </View>

            <View style={styles.lapContainer}>
                <Text style={styles.lapLabel}>Lap #1</Text>
                <Text style={styles.lapTime}>01:05.11</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 60,
        alignItems: 'center',
        borderWidth: 1
    },
    mainTime: {
        fontSize: 60,
        fontWeight: '200',
        marginTop: 50,
        marginBottom: 30,
        textAlign: 'center',
        color: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 40,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e8e8e8',
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
    },
    lapContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#000000',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    lapLabel: {
        fontSize: 18,
        color: '#000000',
    },
    lapTime: {
        fontSize: 18,
        color: '#000000',
    },
});