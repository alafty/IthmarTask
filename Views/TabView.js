import * as React from "react";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesView from './FavouritesView'
import ProfileView from './ProfileView'
import HomeView from './HomeView'

const Tab = createBottomTabNavigator();

const TabView = () => {
return(
    <Tab.Navigator>
    <Tab.Screen 
    name= "home"
    component= {HomeView}
    options= {{ headerShown: false}}
      />
      <Tab.Screen 
      name= "favourites"
      component= {FavouritesView}
      options= {{ headerShown: false}}
      />
      <Tab.Screen
      name= "profile"
      component={ProfileView}
      />
    </Tab.Navigator>
);
}

export default TabView;