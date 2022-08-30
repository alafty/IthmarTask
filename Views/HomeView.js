import * as React from "react";
import {View, Text} from "react-native"
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesView from './FavouritesView'
import ProfileView from './ProfileView'
const Tab = createBottomTabNavigator();

const HomeView = () => {
    <View>
        <Text> Home </Text>
    </View>
}

export default HomeView;