import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👤</Text>
      <Text style={styles.nombre}>Leonardo Petriette</Text>
      <Text style={styles.email}>leonardo@email.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: '#f5f5f5' },
  avatar: { fontSize: 60 },
  nombre: { fontSize: 22, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#888' },
});