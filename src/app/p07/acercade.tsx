import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AcercaDe() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 Acerca De</Text>
      <Text style={styles.texto}>AppNavegacionAvanzada v1.0</Text>
      <Text style={styles.texto}>Creada con Expo Router 🚀</Text>
      <TouchableOpacity style={styles.boton} onPress={() => router.back()}>
        <Text style={styles.botonTexto}>← Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  texto: { fontSize: 16, color: '#555' },
  boton: { backgroundColor: '#9b59b6', padding: 14, borderRadius: 10, width: 200, alignItems: 'center', marginTop: 16 },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});