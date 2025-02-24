import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';



const getTypeDetails = (type = "") => {
  switch (type.toLowerCase()) {
    case 'water':
      return { borderColor: 'blue', emoji: '💧' };
    case 'fire':
      return { borderColor: 'orange', emoji: '🔥' };
    case 'grass':
      return { borderColor: 'green', emoji: '🌿' };
    case 'electric':
      return { borderColor: 'yellow', emoji: '⚡' };
    case 'psychic':
      return { borderColor: 'purple', emoji: '🔮' };
    default:
      return { borderColor: 'gray', emoji: '❓' }; // Default case
  }
};

export default function PokemonCard({ name, image, type, hp, moves, weakness }) {



  const { borderColor, emoji } = getTypeDetails(type);


  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>♥ {hp}</Text>
      </View>
      <Image source={image} accessibilityLabel={`${name} pokemon`} style={styles.image} />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>

          <Text style={styles.typeEmoji}>{emoji}:</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.moviesAndWeaknes}>
        <Text style={styles.label}>Moves: </Text>
        <Text style={styles.value}>{moves.join(", ")}</Text>
      </View>

      <View style={styles.moviesAndWeaknes}>
        <Text style={styles.label}>Weakness: </Text>
        <Text style={styles.value}>{weakness.join(", ")}</Text>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 20,
    margin: 16,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  hp: {
    fontSize: 22,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    shadowColor: '#999',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  typeEmoji: {
    fontSize: 36,
    marginRight: 8,
  },
  typeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  infoRow: {
    flexDirection: 'row', // **Moves and Weaknesses in One Row**
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: 8,
  },
  infoBlock: {
    flex: 1, // Makes both sections take equal space
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  moviesAndWeaknes: {
    alignItems: 'flex-start'
  }
});
