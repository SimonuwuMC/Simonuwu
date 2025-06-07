import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ModsScreen() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const mods = [
    {
      name: "Sodium",
      description: "Optimización del renderizado gráfico",
      url: "https://modrinth.com/mod/sodium",
      category: "performance",
      icon: "https://cdn.modrinth.com/data/AANobbMI/icon.png"
    },
    {
      name: "Lithium",
      description: "Mejoras en la física y lógica del juego",
      url: "https://modrinth.com/mod/lithium",
      category: "performance",
      icon: "https://cdn.modrinth.com/data/gvQqBUqZ/icon.png"
    },
    {
      name: "Iris Shaders",
      description: "Soporte para shaders",
      url: "https://modrinth.com/mod/iris",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/YL57xq9U/18d0e7f076d3d6ed5bedd472b853909aac5da202_96.webp"
    },
    {
      name: "Mod Menu",
      description: "Interfaz para gestionar mods",
      url: "https://modrinth.com/mod/modmenu",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/mOgUt4GM/1bfe2006b38340e9d064700e41adf84a8abb1bd4_96.webp"
    },
    {
      name: "Fabric API",
      description: "API necesaria para los mods de Fabric",
      url: "https://modrinth.com/mod/fabric-api",
      category: "required",
      icon: "https://cdn.modrinth.com/data/P7dR8mSH/icon.png"
    }
  ];

  const categories = {
    performance: "Rendimiento",
    graphics: "Gráficos",
    utility: "Utilidad",
    required: "APIs Requeridas"
  };

  const openMod = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111827' : '#f9fafb' }]}>
      <ScrollView style={styles.content}>
        <Text style={[styles.title, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
          Mods Instalados
        </Text>
        
        {Object.entries(categories).map(([category, title]) => (
          <View key={category} style={styles.categorySection}>
            <Text style={[styles.categoryTitle, { color: isDark ? '#fecaca' : '#991b1b' }]}>
              {title}
            </Text>
            <View style={styles.modsContainer}>
              {mods
                .filter(mod => mod.category === category)
                .map((mod, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.modCard,
                      { backgroundColor: isDark ? '#374151' : '#ffffff' }
                    ]}
                    onPress={() => openMod(mod.url)}
                  >
                    <Image 
                      source={{ uri: mod.icon }}
                      style={styles.modIcon}
                      defaultSource={require('../../assets/icon.png')}
                    />
                    <View style={styles.modInfo}>
                      <Text style={[styles.modName, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
                        {mod.name}
                      </Text>
                      <Text style={[styles.modDescription, { color: isDark ? '#d1d5db' : '#4b5563' }]}>
                        {mod.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  categorySection: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  modsContainer: {
    gap: 12,
  },
  modCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 15,
  },
  modInfo: {
    flex: 1,
  },
  modName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  modDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
});