import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SearchVehicles = ({ onSearch }) => {
  let brandInput = null;
  let modelInput = null;
  let yearInput = null;
  let priceInput = null;

  const searchVehicles = () => {
    const filter = {
      brand: brandInput.value.trim(),
      model: modelInput.value.trim(),
      year: yearInput.value.trim(),
      price: priceInput.value.trim(),
    };
    onSearch(filter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Vehicles</Text>
      <TextInput
        ref={input => brandInput = input}
        style={styles.input}
        placeholder="Brand"
      />
      <TextInput
        ref={input => modelInput = input}
        style={styles.input}
        placeholder="Model"
      />
      <TextInput
        ref={input => yearInput = input}
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
      />
      <TextInput
        ref={input => priceInput = input}
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button title="Search" onPress={searchVehicles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchVehicles;