import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Address:</Text>
      <Text style={styles.text}>cll 123 cra 8 # 40</Text>
      <Text style={styles.subtitle}>Phone:</Text>
      <Text style={styles.text}>456-7890</Text>
      <Text style={styles.subtitle}>Email:</Text>
      <Text style={styles.text}>concesionario@correo.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Contact;
