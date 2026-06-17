import { ScrollView, StyleSheet, Alert } from 'react-native';
import Card from '@/components/card';

export default function Saludo() {
  return (
    <ScrollView style={styles.container}>
      <Card
        titulo="Tarjeta 1"
        imagen="https://picsum.photos/400/200?random=1"
        onPress={() => Alert.alert('Card 1')}
      >
        Esta es la descripción de la primera tarjeta.
      </Card>

      <Card
        titulo="Tarjeta 2"
        imagen="https://picsum.photos/400/200?random=2"
        onPress={() => Alert.alert('Card 2')}
      >
        Esta es la descripción de la segunda tarjeta.
      </Card>

      <Card
        titulo="Tarjeta 3"
        imagen="https://picsum.photos/400/200?random=3"
        onPress={() => Alert.alert('Card 3')}
      >
        Esta es la descripción de la tercera tarjeta.
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});