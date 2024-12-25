import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import StationListUI from './StationListUI';
import { useNavigation } from '@react-navigation/native';

const mockAlarms = [
  { id: '1', title: '7:48発～8:50着', detail: '区間急行 橋本～桜上水', isEnabled: true },
  { id: '2', title: '14:00発～15:47着', detail: '快速 桜上水～橋本', isEnabled: false },
];

export default function MainScreen() {
  const navigation = useNavigation();

  const renderAlarm = ({ item }) => (
    <View style={styles.alarmItem}>
      <View>
        <Text style={styles.alarmTitle}>{item.title}</Text>
        <Text style={styles.alarmDetail}>{item.detail}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Train Alarm</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('NewAlarmScreen')} // Navigate to NewAlarmScreen
        >
          <Text style={styles.iconText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Station List with Proximity Alert */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>リアルタイム位置と近くの駅情報</Text>
        <StationListUI />
      </View>

      {/* Alarm List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>アラーム一覧</Text>
        <FlatList
          data={mockAlarms}
          renderItem={renderAlarm}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.alarmList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#3d3d3d',
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  iconButton: {
    padding: 10,
  },
  iconText: {
    fontSize: 20,
    color: 'white',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  alarmList: {
    padding: 10,
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  alarmTitle: {
    fontSize: 18,
    color: 'white',
  },
  alarmDetail: {
    fontSize: 14,
    color: '#ccc',
  },
});
