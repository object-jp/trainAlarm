import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreenUI';
import SelectOptionScreen from './components/SelectOptionScreen';
import GPSLocation from './components/GPSLocation';
import SettingsScreen from './components/SettingsScreen';
import NewAlarmScreen from './components/NewAlarmScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelectOptionScreen" component={SelectOptionScreen} options={{ title: 'アラーム設定方法' }} />
        <Stack.Screen name="GPSSettingScreen" component={GPSLocation} options={{ title: 'GPS設定' }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: '設定' }} />
        <Stack.Screen name="NewAlarmScreen" component={NewAlarmScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
