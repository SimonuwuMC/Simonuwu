import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import AsyncStorage from 'react-native-async-storage';
import { ThemeProvider } from './src/context/ThemeContext';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme || 'light');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#111827' : '#f9fafb' }]}>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        <MainNavigator />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});