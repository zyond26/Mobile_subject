import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const foods = [
  {
    id: 1,
    title: 'Burger Beef',
    price: 12.32,
    rating: 4.5,
    time: '30 min',
    calories: 500,
    image: 'https://images.pexels.com/photos/4147875/pexels-photo-4147875.jpeg',
    description: 'Delicious beef burger with fresh vegetables and sauces.',
  },
  {
    id: 2,
    title: 'Fruit Salad',
    price: 23.12,
    rating: 4.5,
    time: '30 min',
    calories: 200,
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
    description: 'Healthy mixed fruit salad with yogurt dressing.',
  },
  {
    id: 3,
    title: 'Fruit egg',
    price: 13.42,
    rating: 4.5,
    time: '30 min',
    calories: 300,
    image: 'https://images.pexels.com/photos/247466/pexels-photo-247466.jpeg',
    description: 'Pizza base topped with fresh salad and light dressing.',
  },
  {
    id: 4,
    title: 'Pizza Salad',
    price: 24.12,
    rating: 4.5,
    time: '30 min',
    calories: 400,
    image: 'https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg',
    description: 'Pizza base topped with fresh salad and light dressing.',
  },
  {
    id: 5,
    title: 'Pizza',
    price: 26.26,
    rating: 4.5,
    time: '30 min',
    calories: 600,
    image: 'https://images.pexels.com/photos/3764641/pexels-photo-3764641.jpeg',
    description: 'Pizza base topped with fresh salad and light dressing.',
  }
]


export default function FoodScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);

  useEffect(() => {
    const filtered = foods.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="🔍  Search"
        placeholderTextColor='grey'
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredFoods}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetailFoodScreen', { food: item })}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.ratingOverlay}>🌟 {item.rating}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  search: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 16,
    color: '#000',
  },
  card: {
    width: '50%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: 200,
  },
  ratingOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(234, 208, 59, 0.95)',
    color: '#000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    color: 'black',
    marginTop: 4,
  },
});
