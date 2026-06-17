import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Practica04() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingresá tu nombre"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={contrasena}
        onChangeText={setContrasena}
        placeholder="Ingresá tu contraseña"
        secureTextEntry
      />

      {nombre !== '' && contrasena !== '' && (
        <Text style={styles.bienvenida}>Hola, {nombre} 👋</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  bienvenida: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 8,
    textAlign: 'center',
  },
});