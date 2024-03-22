import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState([]);

  useEffect(() => {
    const serviceHistoryData = [
      { id: 1, client: 'John Doe', serviceType: 'Oil Change', date: '2024-03-15' },
      { id: 2, client: 'Jane Smith', serviceType: 'Brake Repair', date: '2024-03-12' },
      { id: 3, client: 'Alice Johnson', serviceType: 'Tire Rotation', date: '2024-03-10' },
    ];

    setServiceHistory(serviceHistoryData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.client}</Text>
      <Text style={styles.text}>{item.serviceType}</Text>
      <Text style={styles.text}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service History</Text>
      <FlatList
        data={serviceHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  text: {
    fontSize: 16,
  },
});

export default ServiceHistory;
