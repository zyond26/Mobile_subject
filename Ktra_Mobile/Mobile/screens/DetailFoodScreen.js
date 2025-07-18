import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export default function DetailFoodScreen({ route }) {
  const { food } = route.params;
  const [quantity] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={{ uri: food.image }} style={styles.image} />
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.note}> ⭐ {food.rating}  🔥 {food.calories} cal  ⏱️ {food.time}</Text>

      <View style={styles.row}>
        <Text style={styles.price}>${food.price}</Text>
        <View style={styles.quantityContainer}>
          <Pressable style={{ backgroundColor: 'lightgrey', padding: 6 }} >
            <Text>-</Text>
          </Pressable>
          <Text>{quantity}</Text>
          <Pressable style={{ backgroundColor: 'lightgrey', padding: 6 }} >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.description}>{food.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 430,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  note: {
    fontSize: 15,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  description: {
    fontSize: 15,
    marginVertical: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 12,
    margin: 66,
    borderRadius: 26,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
