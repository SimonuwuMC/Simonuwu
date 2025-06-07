import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const openLink = (url, title) => {
    Linking.openURL(url);
  };

  const showInfo = () => {
    Alert.alert(
      'Acerca de',
      'Simonuwu Fabric Project v1.0.0\n\nCreado por Simonuwu\n\nUna aplicación móvil para gestionar y descargar el modpack más optimizado de Minecraft Fabric.',
      [{ text: 'OK' }]
    );
  };

  const settingsOptions = [
    {
      title: 'Tema',
      subtitle: isDark ? 'Modo Oscuro' : 'Modo Claro',
      icon: isDark ? 'moon' : 'sunny',
      onPress: toggleTheme,
    },
    {
      title: 'Canal de YouTube',
      subtitle: 'Visita el canal oficial de Simonuwu',
      icon: 'logo-youtube',
      onPress: () => openLink('https://www.youtube.com/@simonuwu.minecraft', 'YouTube'),
    },
    {
      title: 'Modrinth',
      subtitle: 'Ver el modpack en Modrinth',
      icon: 'cube',
      onPress: () => openLink('https://modrinth.com/modpack/simonuwu-fabric-project', 'Modrinth'),
    },
    {
      title: 'Acerca de',
      subtitle: 'Información de la aplicación',
      icon: 'information-circle',
      onPress: showInfo,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111827' : '#f9fafb' }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
          Configuración
        </Text>
        
        <View style={styles.settingsContainer}>
          {settingsOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.settingItem,
                { backgroundColor: isDark ? '#374151' : '#ffffff' }
              ]}
              onPress={option.onPress}
            >
              <View style={styles.settingLeft}>
                <Ionicons 
                  name={option.icon} 
                  size={24} 
                  color={isDark ? '#fca5a5' : '#dc2626'} 
                  style={styles.settingIcon}
                />
                <View>
                  <Text style={[styles.settingTitle, { color: isDark ? '#f3f4f6' : '#1f2937' }]}>
                    {option.title}
                  </Text>
                  <Text style={[styles.settingSubtitle, { color: isDark ? '#9ca3af' : '#6b7280' }]}>
                    {option.subtitle}
                  </Text>
                </View>
              </View>
              <Ionicons 
                name="chevron-forward" 
                size={20} 
                color={isDark ? '#9ca3af' : '#6b7280'} 
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? '#9ca3af' : '#6b7280' }]}>
            Simonuwu Fabric Project
          </Text>
          <Text style={[styles.footerText, { color: isDark ? '#9ca3af' : '#6b7280' }]}>
            Versión 1.0.0
          </Text>
        </View>
      </View>
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
  settingsContainer: {
    gap: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
});