import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailMovie() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Image
                        source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2hx-FaHPvdfxZzWoL4EQQ31JZgSZ7DhUyiFeF3DyF8OrEtSuLNJIq9YRySbIq2yXYmnqpzg' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Text style={styles.imageText}>Meta: 51</Text>
                    <Text style={styles.imageText}>imDB: 5.4</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.title}>Batman Forever (1995)</Text>
                    <Text style={styles.info}>Genre: Action, Adventure, Fantasy</Text>
                    <Text style={styles.info}>Release Date: 16 Jun 1995</Text>
                    <Text style={styles.info}>Director: Joel Schumacher</Text>
                    <Text style={styles.separator}>{"\n"}</Text>
                    <Text style={styles.description}> Batman must battle Two-Face and The Riddler, who seek to unlock the dark secrets of Gotham City.
                        With the help of his new ally, Robin, Batman must stop their evil plans while facing his own inner demons.</Text>
                    <Text style={styles.separator}>{"\n"}</Text>
                    <Text style={styles.info}>Genre: Action, Adventure, Fantasy</Text>
                    <Text style={styles.info}>Release Date: 16 Jun 1995</Text>
                    <Text style={styles.info}>Director: Joel Schumacher</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderWidth: 2,
        borderColor: '#000000',
        paddingTop: 50
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    image: {
        width: 160,
        height: 260,
        borderColor: '#000000',
    },
    imageText: {
        fontSize: 26,
        color: '#000000',
        marginTop: 5,
    },
    text: {
        flex: 1,
        paddingLeft: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 4,
    },
    description: {
        fontSize: 15,
        color: '#000000',
        marginTop: 10,
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10
    },
});