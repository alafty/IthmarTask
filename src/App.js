 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginView from './views/LoginView';
import TabView from './views/TabView'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name= "login-page"
        component= {LoginView}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "home-page"
        component={TabView}
        options= {{ headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
