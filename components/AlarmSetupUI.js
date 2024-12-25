import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import StationListUI from './StationListUI';

export default function AlarmSetupUI() {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleStationSelect = (station) => {
    setSelectedStation(station);
    console.log("Selected station:", station);
  };

  const setAlarm = () => {
    console.log("Alarm set for:", selectedStation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>アラームの設定</Text>
      <StationListUI onStationSelect={handleStationSelect} />
      {selectedStation && (
        <Button title="アラームを設定" onPress={setAlarm} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
