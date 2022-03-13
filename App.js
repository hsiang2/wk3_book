import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const BookStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Home' 
        component={HomeScreen}
      />
      <Stack.Screen 
        name='Detail'
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <BookStack />
    </NavigationContainer>
  );
}

export default App;
