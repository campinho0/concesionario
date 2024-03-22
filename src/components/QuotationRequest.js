import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const QuotationRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Número de celular:', phoneNumber);
    console.log('Mensaje:', message);
  };

  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Quotation Request</Text>
        <TextInput
            style={styles.input}
            placeholder="Names and Last names"
            value={name}
            onChangeText={text => setName(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Telephone number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
        />
        <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Message"
            value={message}
            onChangeText={text => setMessage(text)}
            multiline
        />
        <Button title="Send request" onPress={handleSubmit} />
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
  messageInput: {
    height: 100,
    textAlignVertical: 'top', 
  },
});

export default QuotationRequest;
