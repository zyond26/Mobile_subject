import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFF00',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFF00',
    },
    topSection: {
        backgroundColor: '#FFFF00',
        paddingVertical: 35,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: width * 0.5,
    },
    setTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    mainValue: {
        fontSize: 78,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 0,
        lineHeight: 80,
    },
    changeValue: {
        fontSize: 22,
        color: 'black',
        marginTop: 5,
    },
    buttonGridContainer: {
        flex: 1,
        backgroundColor: '#FFC0CB',
        padding: 10,
        justifyContent: 'space-evenly',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    gridButton: {
        backgroundColor: '#E8E8E8',
        width: width * 0.28,
        height: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C0C0C0',
    },
    gridButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    },
});

export default function CalculatorScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Text style={styles.setTitle}>SET</Text>
                    <Text style={styles.mainValue}>9,999.99</Text>
                    <Text style={styles.changeValue}>+115.23 (0.56%)</Text>
                </View>

                <View style={styles.buttonGridContainer}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>SET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>S&P</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>NASDAQ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>Dow Jones</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>Shanghai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>Nikkei</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>Hang Seng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>TSEC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridButton}>
                            <Text style={styles.gridButtonText}>EURO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}