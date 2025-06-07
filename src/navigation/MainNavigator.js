import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import DownloadScreen from '../screens/DownloadScreen';
import ModsScreen from '../screens/ModsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Descargas') {
              iconName = focused ? 'download' : 'download-outline';
            } else if (route.name === 'Mods') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'Ajustes') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: isDark ? '#9ca3af' : '#6b7280',
          tabBarStyle: {
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
            borderTopColor: isDark ? '#374151' : '#e5e7eb',
          },
          headerStyle: {
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
          },
          headerTintColor: isDark ? '#ffffff' : '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Descargas" component={DownloadScreen} />
        <Tab.Screen name="Mods" component={ModsScreen} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}