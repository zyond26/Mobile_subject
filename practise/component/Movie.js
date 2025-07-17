import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const POSTER_WIDTH = (width - 30) / 2;

const movies = [
    {
        id: '1',
        title: 'POKEMON Detective Pikachu',
        genre: 'Adventure',
        poster: 'https://resizing.flixster.com/jTbBMY_UKUg_VnJvJN92YzGjiNI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16236207_v_h9_aj.jpg',
        description: 'A young man teams up with Detective Pikachu to uncover secrets in the Pokémon world.',
        year: 2019,
        rating: 6.6,
        age: '7+',
        duration: '104min'
    },
    {
        id: '2',
        title: 'The Hustle',
        genre: 'Comedy',
        poster: 'https://m.media-amazon.com/images/M/MV5BNmI2YjExZTktOGVlYi00YTUwLWE4OTgtZGI0MWEyYjAwN2RkXkEyXkFqcGc@._V1_.jpg',
        description: 'Two con women team up to take down the men who wronged them.',
        year: 2019,
        rating: 5.4,
        age: '13+',
        duration: '94min'

    },
    {
        id: '3',
        title: 'SPIDER-MAN 2',
        genre: 'Action',
        poster: 'https://upload.wikimedia.org/wikipedia/en/0/0f/SpiderMan2PS5BoxArt.jpeg',
        description: 'Peter Parker struggles to balance his life as Spider-Man and his personal responsibilities.',
        year: 2004,
        rating: 7.4,
        age: '16+',
        duration: '108min'
    },
    {
        id: '4',
        title: 'Aladdin',
        genre: 'Fantasy',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg',
        description: 'A street urchin discovers a magical lamp and unleashes a powerful genie.',
        year: 2019,
        rating: 6.9,
        age: '7+',
        duration: '128min',
    },
    {
        id: '5',
        title: 'Inception',
        genre: 'Sci-Fi',
        poster: 'https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8=w240-h480-rw',
        description: 'A thief who steals corporate secrets through dream-sharing technology is given an inverse task.',
        year: 2010,
        rating: 8.8,
        age: '13+',
        duration: '148min'
    },
    {
        id: '6',
        title: 'Coco',
        genre: 'Animation',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810',
        description: 'Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather.',
        year: 2017,
        rating: 8.4,
        age: '7+',
        duration: '105min'
    },
    {
        id: '7',
        title: 'Avengers: Endgame',
        genre: 'Action',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
        description: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos’s actions.',
        year: 2019,
        rating: 8.4,
        age: '13+',
        duration: '181min',
    },
    {
        id: '8',
        title: 'Frozen II',
        genre: 'Animation',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg',
        description: 'Elsa and Anna journey far from Arendelle to discover the origin of Elsa’s powers and save their kingdom.',
        year: 2019,
        rating: 6.8,
        age: '7+',
        duration: '103min',
    }

];

export default function Movie() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Film', {
                title: item.title,
                imageUri: item.poster,
                genre: item.genre,
                releaseDate: item.year || 'N/A',
                description: item.description || '',
                meta: item.rating || 'N/A',
                imdb: item.age || 'N/A',
                duration: item.duration || 'Unknown',
            })}
        >
            <Image source={{ uri: item.poster }} style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        </Pressable>
    );

    return (
        <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        marginBottom: 20,
        width: POSTER_WIDTH,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        marginBottom: 6,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    },
});
