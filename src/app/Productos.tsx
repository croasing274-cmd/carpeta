import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Producto = {
  nombre: string;
  descripcion: string;
  precio: string;
  categoria: string;
  imagen: string;
};

const esquema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  descripcion: Yup.string().required('La descripción es obligatoria'),
  precio: Yup.number().typeError('Debe ser un número').required('El precio es obligatorio').positive('Debe ser positivo'),
  categoria: Yup.string().required('La categoría es obligatoria'),
});

export default function Practica10() {
  const [imagen, setImagen] = useState('');
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('productos').then(data => {
      if (data) setProductos(JSON.parse(data));
    });
  }, []);

  const formik = useFormik({
    initialValues: { nombre: '', descripcion: '', precio: '', categoria: '' },
    validationSchema: esquema,
    onSubmit: async (values, { resetForm }) => {
      const nuevo: Producto = { ...values, imagen };
      const actualizados = [...productos, nuevo];
      setProductos(actualizados);
      await AsyncStorage.setItem('productos', JSON.stringify(actualizados));
      setImagen('');
      resetForm();
      Alert.alert('✅ Producto guardado');
    },
  });

  const seleccionarImagen = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });
    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const tomarFoto = async () => {
    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (!permiso.granted) {
      Alert.alert('Se necesita permiso de cámara');
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.7,
    });
    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🛍️ Nuevo Producto</Text>

      {/* Campos */}
      {[
        { key: 'nombre', placeholder: 'Nombre del producto' },
        { key: 'descripcion', placeholder: 'Descripción' },
        { key: 'precio', placeholder: 'Precio', keyboard: 'numeric' },
        { key: 'categoria', placeholder: 'Categoría (ej: Electrónica)' },
      ].map(({ key, placeholder, keyboard }) => (
        <View key={key}>
          <TextInput
            style={[styles.input, formik.touched[key as keyof typeof formik.touched] && formik.errors[key as keyof typeof formik.errors] ? styles.inputError : null]}
            placeholder={placeholder}
            value={formik.values[key as keyof typeof formik.values]}
            onChangeText={formik.handleChange(key)}
            onBlur={formik.handleBlur(key)}
            keyboardType={keyboard as any ?? 'default'}
          />
          {formik.touched[key as keyof typeof formik.touched] && formik.errors[key as keyof typeof formik.errors] && (
            <Text style={styles.error}>{formik.errors[key as keyof typeof formik.errors]}</Text>
          )}
        </View>
      ))}

      {/* Imagen */}
      <View style={styles.botonesImagen}>
        <TouchableOpacity style={styles.botonImg} onPress={seleccionarImagen}>
          <Text style={styles.botonTexto}>🖼️ Galería</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonImg} onPress={tomarFoto}>
          <Text style={styles.botonTexto}>📷 Cámara</Text>
        </TouchableOpacity>
      </View>

      {imagen !== '' && (
        <Image source={{ uri: imagen }} style={styles.preview} />
      )}

      <TouchableOpacity style={styles.botonGuardar} onPress={() => formik.handleSubmit()}>
        <Text style={styles.botonTexto}>💾 Guardar Producto</Text>
      </TouchableOpacity>

      {/* Lista de productos guardados */}
      {productos.length > 0 && (
        <>
          <Text style={styles.subtitulo}>📦 Productos guardados ({productos.length})</Text>
          {productos.map((p, i) => (
            <View key={i} style={styles.card}>
              {p.imagen !== '' && <Image source={{ uri: p.imagen }} style={styles.cardImg} />}
              <Text style={styles.cardNombre}>{p.nombre}</Text>
              <Text style={styles.cardTexto}>{p.descripcion}</Text>
              <Text style={styles.cardTexto}>💲{p.precio} · {p.categoria}</Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 12 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 4, fontSize: 16 },
  inputError: { borderColor: '#e74c3c' },
  error: { color: '#e74c3c', fontSize: 12, marginBottom: 8 },
  botonesImagen: { flexDirection: 'row', gap: 12, marginVertical: 12 },
  botonImg: { flex: 1, backgroundColor: '#9b59b6', padding: 12, borderRadius: 10, alignItems: 'center' },
  botonGuardar: { backgroundColor: '#2ecc71', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 8 },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  preview: { width: '100%', height: 200, borderRadius: 10, marginBottom: 12 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 14, marginBottom: 10, elevation: 2 },
  cardImg: { width: '100%', height: 140, borderRadius: 8, marginBottom: 8 },
  cardNombre: { fontSize: 16, fontWeight: 'bold' },
  cardTexto: { fontSize: 14, color: '#666', marginTop: 2 },
});