import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Practica03() {
  const [activo, setActivo] = useState(false);

  return (
    <View style={styles.container}>

      {/* Caja 1 - fija */}
      <View style={[styles.caja, styles.cajaRoja]}>
        <Text style={styles.texto}>Caja 1</Text>
      </View>

      {/* Caja 2 - cambia de color al tocar */}
      <TouchableOpacity
        style={[styles.caja, activo ? styles.cajaVerde : styles.cajaAzul]}
        onPress={() => setActivo(!activo)}
      >
        <Text style={styles.texto}>{activo ? '✓ Tocada' : 'Tocame'}</Text>
      </TouchableOpacity>

      {/* Caja 3 - fija */}
      <View style={[styles.caja, styles.cajaAmarilla]}>
        <Text style={styles.texto}>Caja 3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f5f5f5',
  },
  caja: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaRoja: {
    backgroundColor: '#e74c3c',
  },
  cajaAzul: {
    backgroundColor: '#3498db',
  },
  cajaVerde: {
    backgroundColor: '#2ecc71',
  },
  cajaAmarilla: {
    backgroundColor: '#f1c40f',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});