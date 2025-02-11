import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Text style={{ marginTop: 200, color: "white" }}>Hello world</Text>
    </NavigationContainer>
  );
}