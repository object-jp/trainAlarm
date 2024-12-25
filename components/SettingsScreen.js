import React, { useState } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [volume, setVolume] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>設定</Text>
      <View style={styles.settingItem}>
        <Text style={styles.label}>アラーム音量:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={volume}
          onValueChange={setVolume}
        />
        <Text>{volume}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  settingItem: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
