import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import Priem from './src/Priem';
import AnaliseResult from './src/AnaliseResult';
import CallDoctor from './src/CallDoctor';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PriemScreen" component={Priem} />
        <Stack.Screen name="AnaliseResultScreen" component={AnaliseResult} />
        <Stack.Screen name="CallDoctorScreen" component={CallDoctor} />
        <Stack.Screen name="ProfileScreen" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
