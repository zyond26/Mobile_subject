import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Film({ route }) {
    const navigation = useNavigation();
    const { title, imageUri, description, genre, releaseDate, meta, imdb, duration } = route.params || {};

    return (
        <View style={styles.container}>

            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.genre}>{genre}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.infoRow}>
                <Text style={styles.tag}> {imdb}</Text>
                <Text style={styles.tag}>📅 {releaseDate}</Text>
                <Text style={styles.tag}>⭐ {meta}</Text>
                <Text style={styles.tag}>⏱ {duration}</Text>
            </View>
            <Pressable style={styles.watchButton}>
                <Text style={styles.watchButtonText}>▶ Watch Now</Text>
            </Pressable>

            <Pressable onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>◀ Quay lại</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    genre: {
        fontSize: 16,
        color: '#bbb',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
    tag: {
        backgroundColor: '#333',
        color: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 12,
        fontSize: 13,
        marginRight: 8,
        marginBottom: 8,
    },
    watchButton: {
        backgroundColor: '#e74c3c',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    watchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 30,
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Film;
