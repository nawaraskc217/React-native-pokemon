import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pokemon } from './Pokemon';

interface PokemonCardProps extends Pokemon {} // Extend the Pokemon interface for props

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, type, hp, moves, weakness }) => { // Fixed syntax for function component

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.hp}>HP: {hp}</Text>
      <Image source={image} accessibilityLabel={`${name} Pokémon`} style={styles.image} />

      <View>
        <Text style={styles.type}>Type: {type}</Text>
      </View>

      <View>
        <Text style={styles.moves}>Moves: {moves.join(", ")}</Text>
      </View>

      <View>
        <Text style={styles.weakness}>Weakness: {weakness.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 16,
    color: 'red',
  },
  type: {
    fontSize: 16,
  },
  moves: {
    fontSize: 14,
  },
  weakness: {
    fontSize: 14,
  },
});

export default PokemonCard;
