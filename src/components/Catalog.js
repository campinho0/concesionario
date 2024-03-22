import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import SearchVehicles from './SearchVehicles';
import TestDriveRequest from './TestDriveRequest';
import QuotationRequest from './QuotationRequest';
import ServiceAppointment from './ServiceAppointment';
import ServiceHistory from './ServiceHistory';
import OffersPromotions from './OffersPromotions';
import Contact from './Contact';

const initialVehicles = [
  {
    id: 1,
    urlImagen: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg',
    description: 'Honda Civic, 2024',
    price: 25000,
  },
  {
    id: 2,
    urlImagen: 'https://hips.hearstapps.com/hmg-prod/images/ford-f-150-raptor-2024-1-6502f263a6cce.jpg',
    description: 'Ford F150 raptor',
    price: 30000,
  },
  {
    id: 3,
    urlImagen: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
    description: '2020 Ford Mustang',
    price: 40000,
  },
  {
    id: 4,
    urlImagen: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
    description: 'Honda Civic, 2025',
    price: 25000,
  }
];

const Catalog = () => {
  const [allVehicles, setAllVehicles] = useState(initialVehicles);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const handleSearch = (filter) => {
    const filtered = allVehicles.filter(vehicle => {
      const brandMatches = vehicle.description.toLowerCase().includes(filter.brand.toLowerCase());
      const priceMatches = filter.price === '' || vehicle.price.toString() === filter.price;
      return brandMatches && priceMatches;
    });
    setFilteredVehicles(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.urlImagen }} style={styles.image} />
      <Text style={styles.name}>{item.description}</Text>
      <Text style={styles.description}>Price: ${item.price}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.componentContainer}>
          <SearchVehicles onSearch={handleSearch} />
        </View>
        <Text style={styles.title}>Vehicle Catalog</Text>
        <View style={styles.componentContainer}>
          <FlatList
            data={filteredVehicles.length > 0 ? filteredVehicles : allVehicles}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.componentContainer}>
          <TestDriveRequest />
        </View>
        <View style={styles.componentContainer}>
          <QuotationRequest />
        </View>
        <View style={styles.componentContainer}>
          <ServiceAppointment />
        </View>
        <View style={styles.componentContainer}>
          <ServiceHistory />
        </View>
        <View style={styles.componentContainer}>
          <OffersPromotions />
        </View>
        <View style={styles.componentContainer}>
          <Contact />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  componentContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Catalog;
