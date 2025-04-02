import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../types/character';
import global from '../styles/global';
import api from '../api/api';
import DogCard from '../components/DogCard';

export default function HomeScreen() {
  const [dogs, setDogs] = useState<Character[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDogs = async () => {
      const { data } = await api.get<Character[]>('/breeds');
      setDogs(data);
    };
    fetchDogs();
  }, []);

  return (
    <ScrollView style={global.container}>
      <Text style={global.title}>🐶 Razas de Perros</Text>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
