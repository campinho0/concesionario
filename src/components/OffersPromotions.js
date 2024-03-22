import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OffersPromotions = () => {
  const [offersPromotions, setOffersPromotions] = useState([]);

  useEffect(() => {

    const offersPromotionsData = [
      { id: 1, title: 'Special Offer: 0% APR Financing', description: 'Get 0% APR financing on select models for a limited time.' },
      { id: 2, title: 'Spring Sale: Up to 20% Off', description: 'Enjoy savings of up to 20% off on all vehicles in our spring sale event.' },
      { id: 3, title: 'Service Discount: $50 Off Maintenance', description: 'Receive $50 off your next maintenance service when you schedule an appointment online.' },
    ];

    setOffersPromotions(offersPromotionsData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offers & Promotions</Text>
      {offersPromotions.map(offer => (
        <View key={offer.id} style={styles.offerContainer}>
          <Text style={styles.offerTitle}>{offer.title}</Text>
          <Text style={styles.offerDescription}>{offer.description}</Text>
        </View>
      ))}
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
  offerContainer: {
    marginBottom: 20,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerDescription: {
    fontSize: 16,
  },
});

export default OffersPromotions;
