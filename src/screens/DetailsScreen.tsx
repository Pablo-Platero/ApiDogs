import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

const DetailsScreen = ({ route }: { route: any }) => {
  const { dog } = route.params;  // Recibir el perro desde los parámetros

  return (
    <View style={styles.container}>
      {dog.image?.url && <Image source={{ uri: dog.image.url }} style={styles.image} />}
      <Text style={styles.name}>{dog.name}</Text>
      <Text style={styles.info}>Esperanza de vida: {dog.life_span}</Text>
      <Text style={styles.info}>Temperamento: {dog.temperament || "No disponible"}</Text>
      <Text style={styles.info}>ID: {dog.id}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "lightblue",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    color: "black",
    fontSize: 19,
  },
});
