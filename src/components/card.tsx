import { View, Text, Image, Button, StyleSheet } from 'react-native';

type CardProps = {
  titulo: string;
  children: React.ReactNode;
  imagen: string;
  onPress: () => void;
};

export default function Card({ titulo, children, imagen, onPress }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{children}</Text>
      <Button title="Ver más" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imagen: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});