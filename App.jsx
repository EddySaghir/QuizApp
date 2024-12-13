import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/Homepage/HomePage';
import QuizPage from './src/components/QuizPage';
import ResultsScreen from './src/components/ResultsScreen';
import { Platform, StyleSheet } from 'react-native';

// Define global font family based on platform
const fontFamily = Platform.select({
  ios: 'Jersey 25',
  android: 'Jersey25-Regular'
});

const styles = StyleSheet.create({
  // ... other styles
  headerTitleStyle: {
    fontFamily: fontFamily,
    fontSize: 20,
    color: '#fff'
  }
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6d6b85',
          },
          headerTitleStyle: styles.headerTitleStyle,
          headerTintColor: '#fff',
        }}>
        <Stack.Screen 
          name="Home" 
          component={HomePage}
          options={{
            title: 'Pick Six'
          }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizPage}
        />
        <Stack.Screen 
          name="Results" 
          component={ResultsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#6d6b85',
            },
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;