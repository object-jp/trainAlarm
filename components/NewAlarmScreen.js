import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const NewAlarmScreen = ({ navigation }) => {
  const [departureStation, setDepartureStation] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');
  const [viaStations, setViaStations] = useState([]);
  const [newViaStation, setNewViaStation] = useState('');
  const [notificationTiming, setNotificationTiming] = useState('1駅前'); // デフォルトは1駅前

  const addViaStation = () => {
    if (newViaStation.trim()) {
      setViaStations([...viaStations, newViaStation.trim()]);
      setNewViaStation('');
    }
  };

  const removeViaStation = (index) => {
    const updatedViaStations = viaStations.filter((_, i) => i !== index);
    setViaStations(updatedViaStations);
  };

  const saveAlarm = () => {
    // アラーム設定を保存し、MainScreenに戻る
    console.log({
      departureStation,
      arrivalStation,
      viaStations,
      notificationTiming,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>出発駅</Text>
      <TextInput
        style={styles.input}
        placeholder="例: 東京"
        value={departureStation}
        onChangeText={setDepartureStation}
      />

      <Text style={styles.label}>到着駅</Text>
      <TextInput
        style={styles.input}
        placeholder="例: 新宿"
        value={arrivalStation}
        onChangeText={setArrivalStation}
      />

      <Text style={styles.label}>経由駅</Text>
      <FlatList
        data={viaStations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.viaStationRow}>
            <Text style={styles.viaStationText}>{item}</Text>
            <TouchableOpacity onPress={() => removeViaStation(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>削除</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="経由駅を追加"
        value={newViaStation}
        onChangeText={setNewViaStation}
        onSubmitEditing={addViaStation}
      />
      <Button title="経由駅を追加" onPress={addViaStation} />

      <Text style={styles.label}>通知タイミング</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity onPress={() => setNotificationTiming('1駅前')} style={styles.radioButton}>
          <Text style={notificationTiming === '1駅前' ? styles.selectedRadio : styles.unselectedRadio}>
            ●
          </Text>
          <Text>1駅前</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNotificationTiming('5分前')} style={styles.radioButton}>
          <Text style={notificationTiming === '5分前' ? styles.selectedRadio : styles.unselectedRadio}>
            ●
          </Text>
          <Text>5分前</Text>
        </TouchableOpacity>
      </View>

      <Button title="保存" onPress={saveAlarm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  viaStationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  viaStationText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#ff5555',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  selectedRadio: {
    fontSize: 18,
    marginRight: 5,
    color: '#007AFF',
  },
  unselectedRadio: {
    fontSize: 18,
    marginRight: 5,
    color: '#ccc',
  },
});

export default NewAlarmScreen;
