import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function DownloadScreen() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('1.21.5');
  
  const isDark = theme === 'dark';

  const handleDownload = (version, url) => {
    if (version === "1.0.0") {
      Alert.alert('¡Logro Desbloqueado!', 'Arqueólogo: Encontraste la versión 1.0.0 del modpack');
    }
    Linking.openURL(url);
  };

  const versionGroups = {
    '1.21.5': [
      {
        id: "60aT4Noc",
        version: "1.0.4",
        date: "May 14, 2025",
        changelog: "Versión estable para Minecraft 1.21.5 con todos los mods actualizados",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.5",
        isBeta: false
      },
      {
        id: "50zT3Nmb",
        version: "beta-0.2-1.0.4",
        date: "May 3, 2025",
        changelog: "Versión beta para Minecraft 1.21.5 con mejoras de rendimiento",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/0.2-1.0.4-1.21.5",
        isBeta: true
      }
    ],
    '1.21.4': [
      {
        id: "70bU5Pqd",
        version: "1.0.4",
        date: "May 12, 2025",
        changelog: "Última versión estable para Minecraft 1.21.4 con todas las características",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.4",
        isBeta: false
      },
      {
        id: "2A3CX5em",
        version: "1.0.0",
        date: "Jan 9, 2025",
        changelog: "Primera versión estable para Minecraft 1.21.4 y del modpack entero, con errores",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.0-1.21.4",
        isBeta: false
      }
    ],
    '1.21.3': [
      {
        id: "1B4DY6fn",
        version: "1.0.4",
        date: "May 26, 2025",
        changelog: "Versión estable para Minecraft 1.21.3",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.3",
        isBeta: false
      }
    ]
  };

  const sortedVersions = Object.keys(versionGroups).sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.split('.').map(Number);
    const [bMajor, bMinor, bPatch] = b.split('.').map(Number);
    
    if (aMajor !== bMajor) return bMajor - aMajor;
    if (aMinor !== bMinor) return bMinor - aMinor;
    return bPatch - aPatch;
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111827' : '#f9fafb' }]}>
      <ScrollView style={styles.content}>
        <Text style={[styles.title, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
          Descargar por Versión
        </Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
          {sortedVersions.map((version) => (
            <TouchableOpacity
              key={version}
              onPress={() => setActiveTab(version)}
              style={[
                styles.tab,
                {
                  backgroundColor: activeTab === version 
                    ? (isDark ? '#7f1d1d' : '#dc2626')
                    : (isDark ? '#374151' : '#e5e7eb')
                }
              ]}
            >
              <Text style={[
                styles.tabText,
                {
                  color: activeTab === version 
                    ? '#ffffff'
                    : (isDark ? '#d1d5db' : '#374151')
                }
              ]}>
                {version}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.versionsContainer}>
          {versionGroups[activeTab]?.map((item) => (
            <View 
              key={item.id} 
              style={[
                styles.versionCard,
                {
                  backgroundColor: item.isBeta 
                    ? (isDark ? '#451a03' : '#fef3c7')
                    : (isDark ? '#374151' : '#ffffff'),
                  borderColor: item.isBeta 
                    ? (isDark ? '#d97706' : '#f59e0b')
                    : (isDark ? '#4b5563' : '#e5e7eb')
                }
              ]}
            >
              <View style={styles.versionHeader}>
                <View>
                  <Text style={[styles.versionTitle, { color: isDark ? '#f3f4f6' : '#1f2937' }]}>
                    v{item.version} - Minecraft {activeTab}
                  </Text>
                  {item.isBeta && (
                    <View style={[styles.betaBadge, { backgroundColor: isDark ? '#d97706' : '#f59e0b' }]}>
                      <Text style={styles.betaBadgeText}>BETA</Text>
                    </View>
                  )}
                </View>
                <Text style={[styles.versionDate, { color: isDark ? '#9ca3af' : '#6b7280' }]}>
                  {item.date}
                </Text>
              </View>
              <Text style={[styles.changelog, { color: isDark ? '#d1d5db' : '#4b5563' }]}>
                {item.changelog}
              </Text>
              <TouchableOpacity
                style={[
                  styles.downloadButton,
                  {
                    backgroundColor: item.isBeta 
                      ? (isDark ? '#d97706' : '#f59e0b')
                      : (isDark ? '#059669' : '#10b981')
                  }
                ]}
                onPress={() => handleDownload(item.version, item.downloadUrl)}
              >
                <Text style={styles.downloadButtonText}>
                  Descargar v{item.version}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
    marginBottom: 20,
  },
  tabContainer: {
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  tabText: {
    fontWeight: '600',
    fontSize: 14,
  },
  versionsContainer: {
    gap: 15,
  },
  versionCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  versionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  versionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  betaBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  betaBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  versionDate: {
    fontSize: 12,
  },
  changelog: {
    marginBottom: 15,
    lineHeight: 20,
  },
  downloadButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});