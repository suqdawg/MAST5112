import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { addItemToCart } from '../js/cart';

const menuData = [
  { id: '1', name: 'Chocolate Cake', price: 10 },
  { id: '2', name: 'Vanilla Ice Cream', price: 5 },
  { id: '3', name: 'Cheesecake', price: 12 },
  { id: '4', name: 'Brownie', price: 7 },
];

export default function MenuScreen() {
  const handleAddToCart = (item) => {
    addItemToCart(item);
    Alert.alert('Added to cart', `${item.name} has been added to your cart.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ThemedText>{item.name}</ThemedText>
      <ThemedText>${item.price}</ThemedText>
      <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
        <ThemedText style={styles.addButtonText}>Add to Cart</ThemedText>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ThemedText type="title">Menu</ThemedText>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  list: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
  },
});
