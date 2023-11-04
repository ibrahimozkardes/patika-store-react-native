import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import ProductCards from './components/ProductCards';

import products from './store_data.json';

export default function App() {
  const renderProducts = ({item}) => <ProductCards products={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <FlatList data={products} renderItem={renderProducts} numColumns={2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerText: {
    color: '#82007c',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 5,
  },
  input: {
    backgroundColor: '#ebeff2',
    height: 45,
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
});
