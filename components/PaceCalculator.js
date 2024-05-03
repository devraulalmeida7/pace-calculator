import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const PaceCalculator = () => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [pace, setPace] = useState(0);

  const calculatePace = () => {
    setPace(time / distance);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Distance (in miles):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance.toString()}
        onChangeText={text => setDistance(parseFloat(text))}
      />
      <Text style={styles.label}>Time (in minutes):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={time.toString()}
        onChangeText={text => setTime(parseFloat(text))}
      />
      <Button title="Calculate Pace" onPress={calculatePace} />
      <Text style={styles.result}>Pace: {pace.toFixed(2)} minutes per mile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default PaceCalculator;