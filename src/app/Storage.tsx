import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function validarEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Practica09() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [logueado, setLogueado] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [emailGuardado, setEmailGuardado] = useState('');

  // Al abrir la app, verificar si hay sesión guardada
  useEffect(() => {
    AsyncStorage.getItem('sesion').then(valor => {
      if (valor) {
        setEmailGuardado(valor);
        setLogueado(true);
      }
      setCargando(false);
    });
  }, []);

  const handleLogin = async () => {
    setError('');
    if (email === '' || pass === '') {
      setError('Completá todos los campos');
      return;
    }
    if (!validarEmail(email)) {
      setError('El email no tiene formato válido');
      return;
    }
    await AsyncStorage.setItem('sesion', email);
    setEmailGuardado(email);
    setLogueado(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('sesion');
    setLogueado(false);
    setEmail('');
    setPass('');
  };

  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  if (logueado) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>✅ Sesión activa</Text>
        <Text style={styles.texto}>Bienvenido,</Text>
        <Text style={styles.email}>{emailGuardado}</Text>
        <TouchableOpacity style={styles.botonRojo} onPress={handleLogout}>
          <Text style={styles.botonTexto}>🚪 Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔐 Login</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="usuario@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={pass}
        onChangeText={setPass}
        placeholder="Tu contraseña"
        secureTextEntry
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.botonVerde} onPress={handleLogin}>
        <Text style={styles.botonTexto}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
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
    padding: 12,
    marginBottom: 14,
    fontSize: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
    marginBottom: 24,
  },
  botonVerde: {
    backgroundColor: '#2ecc71',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  botonRojo: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});