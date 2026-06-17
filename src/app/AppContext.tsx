import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TemaProvider, useTema } from '@/context/TemaContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';

function PantallaLogin() {
  const { login } = useAuth();
  const { oscuro } = useTema();

  return (
    <View style={[styles.container, oscuro && styles.oscuro]}>
      <Text style={[styles.titulo, oscuro && styles.textoOscuro]}>
        🔐 Login
      </Text>
      <Text style={[styles.texto, oscuro && styles.textoOscuro]}>
        No estás logueado
      </Text>
      <TouchableOpacity style={styles.botonVerde} onPress={login}>
        <Text style={styles.botonTexto}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

function PantallaInicio() {
  const { logout } = useAuth();
  const { oscuro, toggleTema } = useTema();

  return (
    <View style={[styles.container, oscuro && styles.oscuro]}>
      <Text style={[styles.titulo, oscuro && styles.textoOscuro]}>
        🏠 Inicio
      </Text>
      <Text style={[styles.texto, oscuro && styles.textoOscuro]}>
        ¡Bienvenido! Estás logueado ✅
      </Text>

      <TouchableOpacity style={styles.botonTema} onPress={toggleTema}>
        <Text style={styles.botonTexto}>
          {oscuro ? '☀️ Tema Claro' : '🌙 Tema Oscuro'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonRojo} onPress={logout}>
        <Text style={styles.botonTexto}>🚪 Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

function AppContent() {
  const { logueado } = useAuth();
  return logueado ? <PantallaInicio /> : <PantallaLogin />;
}

export default function Practica08() {
  return (
    <TemaProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </TemaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#f5f5f5',
  },
  oscuro: {
    backgroundColor: '#1a1a2e',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  textoOscuro: {
    color: '#fff',
  },
  botonVerde: {
    backgroundColor: '#2ecc71',
    padding: 14,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  botonRojo: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  botonTema: {
    backgroundColor: '#9b59b6',
    padding: 14,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});