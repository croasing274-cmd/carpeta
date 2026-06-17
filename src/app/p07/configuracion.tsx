import { View, Text, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Configuracion() {
  const [notifs, setNotifs] = useState(false);
  const [oscuro, setOscuro] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚙️ Configuración</Text>
      <View style={styles.fila}>
        <Text style={styles.label}>Notificaciones</Text>
        <Switch value={notifs} onValueChange={setNotifs} />
      </View>
      <View style={styles.fila}>
        <Text style={styles.label}>Modo oscuro</Text>
        <Switch value={oscuro} onValueChange={setOscuro} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 12 },
  label: { fontSize: 16 },
});