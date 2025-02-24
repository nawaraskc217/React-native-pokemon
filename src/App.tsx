import { View, Text, StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import React from 'react';
import PokemonCard from '../comp2/PokemonCard';

export default function App() {
  const charmanderData = [
    {
      name: 'Nawaras',
      image: require("../comp2/assets/poki.png"),
      type: 'fire',
      hp: 39,
      moves: ["scratch", "ember", "glow", "leer"],
      weakness: ['water', 'rock'],
    },
    {
      name: 'Charmander',
      image: require("../comp2/assets/poki.png"),
      type: 'fire',
      hp: 39,
      moves: ["scratch", "ember", "glow", "leer"],
      weakness: ['water', 'rock'],
    },
    {
      name: 'Charmander',
      image: require("../comp2/assets/poki.png"),
      type: 'grass',
      hp: 39,
      moves: ["scratch", "ember", "glow", "leer"],
      weakness: ['water', 'rock'],
    },
    {
      name: 'Charmander',
      image: require("../comp2/assets/poki.png"),
      type: 'fire',
      hp: 39,
      moves: ["scratch", "ember", "glow", "leer"],
      weakness: ['water', 'rock'],
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {charmanderData.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
