import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function GPSLocation({ onProximityAlert }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let watcher;
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      watcher = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          if (onProximityAlert) {
            onProximityAlert(newLocation.coords);
          }
        }
      );
    })();

    return () => {
      if (watcher) watcher.remove();
    };
  }, [onProximityAlert]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {location
          ? `Lat: ${location.latitude}, Lon: ${location.longitude}`
          : errorMsg || 'Waiting for location...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    margin: 10,
  },
});
