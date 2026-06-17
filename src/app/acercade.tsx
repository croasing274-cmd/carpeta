import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AcercaDe() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerca De</Text>
      <Text style={styles.texto}>App creada con Expo Router 🚀</Text>
      <TouchableOpacity style={styles.boton} onPress={() => router.push('/inicio')}>
        <Text style={styles.botonTexto}>🏠 Volver al Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  texto: { fontSize: 16, color: '#555' },
  boton: { backgroundColor: '#2ecc71', padding: 14, borderRadius: 10, width: 200, alignItems: 'center' },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});