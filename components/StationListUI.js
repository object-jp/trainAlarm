import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { loadTimetable } from '../services/LoadTimetable';
import GPSLocation from './GPSLocation';

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // 地球半径，单位为米
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // 距离单位为米
};

export default function StationListUI() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      const data = await loadTimetable();
      setStations(data.stations);
    };
    fetchStations();
  }, []);

  const handleProximityAlert = (currentCoords) => {
    stations.forEach((station) => {
      const distance = calculateDistance(
        currentCoords.latitude,
        currentCoords.longitude,
        parseFloat(station.latitude),
        parseFloat(station.longitude)
      );
      if (distance < 500) {
        Alert.alert('近くの駅', `駅: ${station.name}, 距離: ${Math.round(distance)}m`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <GPSLocation onProximityAlert={handleProximityAlert} />
      <Text style={styles.text}>現在位置をリアルタイムで取得しています...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});
