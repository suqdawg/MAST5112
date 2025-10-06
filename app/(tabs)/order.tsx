import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { getCartItems, removeItemFromCart, calculateCartTotal } from '../js/cart';
import { useFocusEffect } from '@react-navigation/native';

export default function OrderScreen() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const refreshCart = () => {
    const items = getCartItems();
    const currentTotal = calculateCartTotal();
    setCart([...items]);
    setTotal(currentTotal);
  };

  useFocusEffect(
    useCallback(() => {
      refreshCart();
    }, [])
  );

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
    refreshCart();
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ThemedText>{item.name}</ThemedText>
      <ThemedText>${item.price}</ThemedText>
      <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
        <ThemedText style={styles.removeButton}>X</ThemedText>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ThemedText type="title">Your Cart</ThemedText>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id + index}
            style={styles.list}
          />
          <ThemedText type="subtitle">Total: ${total.toFixed(2)}</ThemedText>
        </>
      ) : (
        <ThemedText>Your cart is empty.</ThemedText>
      )}
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
  removeButton: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
