import React, { Component, Text, Pressable } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Styles'
import {Colors} from './Colors'

export function GradientButton(props) {
    return(
        <Pressable onPress={() => navigation.navigate('home-page')}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.gradient1, Colors.gradient2]} style={styles.loginButton}>
            <Text style={styles.buttonText}>{props.text}</Text> 
        </LinearGradient>
    </Pressable>
    )

}
