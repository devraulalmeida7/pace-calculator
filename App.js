import React from 'react';
import { StyleSheet, View } from 'react-native';
import PaceCalculator from './components/PaceCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <PaceCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
});