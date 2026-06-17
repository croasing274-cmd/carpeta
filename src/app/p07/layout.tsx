import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#3498db' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#3498db',
      }}
    >
      <Tabs.Screen name="inicio" options={{ title: '🏠 Inicio' }} />
      <Tabs.Screen name="perfil" options={{ title: '👤 Perfil' }} />
      <Tabs.Screen name="configuracion" options={{ title: '⚙️ Config' }} />
      <Tabs.Screen name="acercade" options={{ href: null }} />
    </Tabs>
  );
}