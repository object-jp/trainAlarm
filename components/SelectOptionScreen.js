import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SelectOptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('GPSSettingScreen')}
      >
        <Text style={styles.optionText}>GPSから設定</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('TimetableSettingScreen')}
      >
        <Text style={styles.optionText}>時刻表から設定</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
  },
  optionButton: {
    backgroundColor: '#3d3d3d',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
});
