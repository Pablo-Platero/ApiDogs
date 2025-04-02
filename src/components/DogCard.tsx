import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Character } from '../types/character';

const DogCard = ({ dog, navigation }: { dog: Character; navigation: any }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { dog })}>
      <View style={styles.card}>
        {dog.image?.url && <Image source={{ uri: dog.image.url }} style={styles.image} />}
        <Text style={styles.name}>{dog.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DogCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
