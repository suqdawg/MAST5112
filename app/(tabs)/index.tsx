import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from '@/components/Card';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.welcomeText}>Welcome to ChristofelMenu!</ThemedText>
      <Card title="Breakfast Menu" onPress={() => console.log('Breakfast pressed')}>
        <ThemedText>Start your day with a delicious meal.</ThemedText>
      </Card>
      <Card title="Lunch Specials" onPress={() => console.log('Lunch pressed')}>
        <ThemedText>Enjoy our daily lunch offerings.</ThemedText>
      </Card>
      <Card title="Dinner Delights" onPress={() => console.log('Dinner pressed')}>
        <ThemedText>Savor our exquisite dinner selections.</ThemedText>
      </Card>
      <Card title="Desserts" onPress={() => console.log('Desserts pressed')}>
        <ThemedText>Indulge in our sweet treats.</ThemedText>
      </Card>
      <Card title="Beverages" onPress={() => console.log('Beverages pressed')}>
        <ThemedText>Quench your thirst with our refreshing drinks.</ThemedText>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    textAlign: 'center',
    marginVertical: 20,
  },
});