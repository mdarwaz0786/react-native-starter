import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const images = [
  { id: '1', title: 'Weddings', source: require('../../../Assets/Images/image1.jpg') },
  { id: '2', title: 'Corporate Event', source: require('../../../Assets/Images/image2.jpg') },
  { id: '3', title: 'Social Gathering', source: require('../../../Assets/Images/image3.jpg') },
  { id: '4', title: 'Birthday Parties', source: require('../../../Assets/Images/image4.jpg') },
  { id: '5', title: 'Sports and Recreational Events', source: require('../../../Assets/Images/image5.jpg') },
  { id: '6', title: 'Charity and Fundraising Events', source: require('../../../Assets/Images/image6.jpg') },
  { id: '7', title: 'Cultural and Religious Events', source: require('../../../Assets/Images/image7.jpg') },
  { id: '8', title: 'Holiday and Seasonal Events', source: require('../../../Assets/Images/image8.jpg') },
  { id: '9', title: 'Product Launches and Promotions', source: require('../../../Assets/Images/image9.jpg') },
];

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topsection}>
        <View style={styles.discount}><Text style={styles.discountText}>Save 10% on every service</Text></View>
        <Text style={styles.headerText}>Bock B</Text>
        <Text style={styles.paragraphText}>Sector 60 - Noida - Uttar Pradesh 20130</Text>
      </View>

      <View style={styles.search}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={20} color="rgb(182, 182, 182)" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search for Weddings"
            placeholderTextColor="rgb(182, 182, 182)"
          />
        </View>
      </View>

      <View style={styles.grid}>
        {
          images.map((item) => (
            <Pressable
              key={item.id}
              style={styles.imageContainer}
              onPress={() => navigation.navigate('Detail', { item })}
            >
              <Image source={item.source} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          ))
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
  },
  topsection: {
    paddingHorizontal: 10,
  },
  discount: {
    backgroundColor: '#A63ED3',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  discountText: {
    fontSize: 17,
    color: '#fff',
  },
  headerText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#333',
    marginTop: 10,
  },
  paragraphText: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },
  search: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  input: {
    color: 'black',
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '33%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
    marginBottom: 0,
  },
});

export default Home;
