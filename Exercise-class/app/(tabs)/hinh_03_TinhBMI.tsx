// // // * ====================================================
// // //   3. COMPONENT FORM & TƯƠNG TÁC
// // //   ==================================================== */

// // /**
// //  * Caculator: Giao diện máy tính BMI đơn giản
// //  * - Bao gồm 2 TextInput cho weight/height
// //  * - Button để tính toán
// //  */

import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export function CalculatorBMI() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(0);

    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100;
        if (weightNum > 0 && heightNum > 0) {
            const bmiValue = weightNum / (heightNum * heightNum);
            setBmi(bmiValue);
        } else {
            setBmi(0);
        }
    };

    return (
        <View style={styles.border}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Weight (KG)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Height (CM)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.result}>BMI: {bmi.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.computeButton} onPress={calculateBMI}>
                <Text style={styles.computeButtonText}>Compute</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    border: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000000',
        paddingTop: 100,
        backgroundColor: '#FFFFFF',
    },
    inputContainer: {
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        padding: 16,
        marginHorizontal: 50,
        marginVertical: 10,
        backgroundColor: '#e8e8e8',
        color: '#000000',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 50,
        marginTop: 26,
    },
    resultContainer: {
        marginVertical: 10,
    },
    result: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginVertical: 16,
    },
    computeButton: {
        borderWidth: 1,
        borderColor: '#000000',
        padding: 16,
        marginHorizontal: 100,
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
    },
    computeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
});