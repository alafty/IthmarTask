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
import LoginWrapper from './views/LoginView';
import TabView from './views/TabView'
import HomeView from './views/HomeView'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name= "login-view"
        component= {LoginWrapper}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "tab-view"
        component={TabView}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "home-view"
        component={HomeView}
        options= {{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
