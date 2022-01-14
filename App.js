import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Services/routes';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='transparent'/>
      <NavigationContainer >
        <Routes />
      </NavigationContainer>
    </>
   
  );
}