import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Detalle() {
  const router = useRouter();
  const { nombre } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Información del Usuario</Text>
      <Text style={styles.dato}>Nombre: {nombre}</Text>
      <TouchableOpacity style={styles.boton} onPress={() => router.back()}>
        <Text style={styles.botonTexto}>← Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  dato: { fontSize: 18, color: '#555' },
  boton: { backgroundColor: '#e74c3c', padding: 14, borderRadius: 10, width: 200, alignItems: 'center' },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});