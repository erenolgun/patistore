import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import products from './data/products.json';
import ProductCard from './ProductCard';

const App = () => {
  const [text, setText] = useState('test');

  const renderProduct = ({item}) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput
        onChangeText={setText}
        value={text}
        style={styles.search_input}
        placeholder="Ara..."
      />
      <FlatList
        data={products}
        renderItem={renderProduct}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    margin: 10,
  },
  search_input: {
    padding: 15,
    backgroundColor: '#ECEFF1',
    borderRadius: 5,
    marginVertical: 10,
    margin: 10,
  },
});

export default App;
