import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSIV ENERGIE JAPAN</Text>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        SAlim BH
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  whiteText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default AppPro;
