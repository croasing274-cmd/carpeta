import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicio() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏠 Pantalla Inicio</Text>
      <TouchableOpacity style={styles.boton} onPress={() => router.push('/p07/acercade')}>
        <Text style={styles.botonTexto}>📋 Acerca De</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.salir]} onPress={() => router.replace('/navegador')}>
        <Text style={styles.botonTexto}>🚪 Salir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  boton: { backgroundColor: '#3498db', padding: 14, borderRadius: 10, width: 200, alignItems: 'center' },
  salir: { backgroundColor: '#e74c3c' },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});