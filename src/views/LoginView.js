import * as React from "react";
import { View, Text, TextInput, Pressable, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Styles';
import {Colors} from '../Colors';
import { GradientButton } from '../GradientButton';

const LoginView = ({navigation}) => {
    return(
        <View style= {styles.container}>
            <View style= {styles.header}>
                <Image source={require('../../Assets/Logo.png')} style= {styles.logo} />
                <View>
                    <Text style= {styles.heading}> Welcome Back </Text>
                    <Text style= {styles.footnote}> Please sign in to continue </Text>
                </View>
            </View>

            <View style= {styles.footer}>

                <TextInput autoCorrect={false} style= {styles.input} placeholder="Username"/>
                <TextInput secureTextEntry={true} style= {styles.input} placeholder="Password"/>

                <Pressable onPress={() => navigation.navigate('home-page')}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.gradient1, Colors.gradient2]} style={styles.loginButton}>
                        <Text style={styles.buttonText}> Login </Text> 
                    </LinearGradient>
                </Pressable>
                

            </View>
        </View>
    
    );
}

export default LoginView;