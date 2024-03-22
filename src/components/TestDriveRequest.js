import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const TestDriveRequest = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Número de identificación:', idNumber);
    console.log('Número de celular:', phoneNumber);
    console.log('Fecha de cita:', date);
  };

  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Test Drive Request</Text>
        <TextInput
            style={styles.input}
            placeholder="Names and Last names"
            value={name}
            onChangeText={text => setName(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Number id"
            value={idNumber}
            onChangeText={text => setIdNumber(text)}
            keyboardType="numeric"
        />
        <TextInput
            style={styles.input}
            placeholder="Telephone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
        />
        <TextInput
            style={styles.input}
            placeholder="Date(YYYY-MM-DD)"
            value={date}
            onChangeText={text => setDate(text)}
        />
        <Button title="Test Drive" onPress={handleSubmit} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default TestDriveRequest;
