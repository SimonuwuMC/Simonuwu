import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function HomeScreen() {
  const { theme } = useTheme();
  const [achievements, setAchievements] = useState([]);
  
  const isDark = theme === 'dark';

  const addAchievement = (achievement) => {
    if (!achievements.some(a => a.id === achievement.id)) {
      setAchievements([...achievements, achievement]);
      Alert.alert('¡Logro Desbloqueado!', achievement.description);
    }
  };

  const handleEasterEgg = () => {
    addAchievement({
      id: 'youtube-fan',
      title: '¡Logro Desbloqueado!',
      description: 'Fan Verdadero: Encontraste el canal de YouTube de Simonuwu'
    });
    Linking.openURL('https://www.youtube.com/@simonuwu.minecraft');
  };

  const openModrinth = () => {
    Linking.openURL('https://modrinth.com/modpack/simonuwu-fabric-project');
  };

  const features = [
    {
      title: "Mods Kawaii",
      description: "Selección de los mods más adorables para tu experiencia Minecraft",
      icon: "🌸"
    },
    {
      title: "Performance",
      description: "Optimizado para correr bien incluso en PCs modestas",
      icon: "⚡"
    },
    {
      title: "Fabric",
      description: "Compatible con la versión más moderna de Minecraft",
      icon: "🧵"
    }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#111827' : '#f9fafb' }]}>
      <LinearGradient
        colors={isDark ? ['#7f1d1d', '#450a0a'] : ['#ef4444', '#dc2626']}
        style={styles.hero}
      >
        <View style={styles.heroContent}>
          <TouchableOpacity onPress={handleEasterEgg}>
            <Text style={styles.heroTitle}>
              <Text style={styles.heroTitleHighlight}>Simonuwu</Text> Fabric Project
            </Text>
          </TouchableOpacity>
          <Text style={styles.heroSubtitle}>
            El modpack más optimizado para Minecraft Fabric
          </Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.primaryButton} onPress={openModrinth}>
              <Text style={styles.primaryButtonText}>Ver en Modrinth</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={[styles.section, { backgroundColor: isDark ? '#1f2937' : '#fef2f2' }]}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
          ¿Por qué Simonuwu?
        </Text>
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <View key={index} style={[styles.featureCard, { backgroundColor: isDark ? '#374151' : '#ffffff' }]}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={[styles.featureTitle, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
                {feature.title}
              </Text>
              <Text style={[styles.featureDescription, { color: isDark ? '#d1d5db' : '#6b7280' }]}>
                {feature.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {achievements.length > 0 && (
        <View style={[styles.section, { backgroundColor: isDark ? '#111827' : '#f9fafb' }]}>
          <Text style={[styles.sectionTitle, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
            Logros Desbloqueados
          </Text>
          {achievements.map((achievement, index) => (
            <View key={index} style={[styles.achievementCard, { 
              backgroundColor: isDark ? '#7f1d1d' : '#fef2f2',
              borderColor: isDark ? '#dc2626' : '#fca5a5'
            }]}>
              <Text style={styles.achievementIcon}>🏆</Text>
              <View style={styles.achievementContent}>
                <Text style={[styles.achievementTitle, { color: isDark ? '#fca5a5' : '#7f1d1d' }]}>
                  {achievement.title}
                </Text>
                <Text style={[styles.achievementDescription, { color: isDark ? '#fecaca' : '#991b1b' }]}>
                  {achievement.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroTitleHighlight: {
    color: '#fecaca',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fecaca',
    textAlign: 'center',
    marginBottom: 30,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#dc2626',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresGrid: {
    gap: 15,
  },
  featureCard: {
    padding: 20,
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
  featureIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featureDescription: {
    textAlign: 'center',
    lineHeight: 20,
  },
  achievementCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
  },
});