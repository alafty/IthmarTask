import * as React from "react";
import { View, Text, TextInput, Pressable, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Styles';
import {Colors} from '../Colors';
import { useDispatch, useSelector, Provider} from "react-redux";
import { store } from '../redux/Store'
import { login } from "../redux/Actions";
import { useState } from "react";

//wraps login view with a provider
//to use dispatch
const LoginWrapper = ({navigation}) => {
    return (
      <Provider store={store}>
        <LoginView navigation={navigation} />
      </Provider>
    )
  }

//main login screen
const LoginView = ({navigation}) => {
    const loginData = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    return(
        <View style= {styles.container}>

            {/* top half of screen with pink backgound*/}
            <View style= {styles.header}>
                <Image source={require('../../Assets/Logo.png')} style= {styles.logo} />
                <View>
                    <Text style= {styles.heading}> Welcome Back </Text>
                    <Text style= {styles.footnote}> Please sign in to continue </Text>
                </View>
            </View>

            {/* bottom half of screen with white backgound*/}
            <View style= {styles.footer}>
                
                <Text style={styles.error}>{error}</Text>
                <TextInput onFocus={() => {setUserFocus(true)}} onBlur={() => {setUserFocus(false)}} autoCorrect={false} style= {userFocus ?  styles.inputFocus : styles.input} placeholder="Username" onChangeText={newText => setUsername(newText)}/>
                <TextInput onFocus= {() => {setPassFocus(true)}} onBlur={() => {setPassFocus(false)}} secureTextEntry={true} style= {passFocus ? styles.inputFocus : styles.input} placeholder="Password"/>

                <Pressable onPress={() => {
                    if(username != null && username != ''){
                        setError('')
                        dispatch({
                            type: login,
                            payload: username
                        });
                        navigation.navigate('tab-view');
                    } else {
                        setError('Please enter a valid username')
                    }
                    }}>
                    <LoginButton title="Login" />
                </Pressable>
                <Pressable style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: '100%'
                    }}
                    onPress={() => navigation.navigate('home-view')}>
                        <Text style={[styles.footnote, {paddingEnd: 20}]}> Skip for now </Text>
                </Pressable>
                

            </View>
        </View>
    
    );
}

//Login Button Component
export const LoginButton = (props) => {
    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.gradient1, Colors.gradient2]} style={styles.loginButton}>
             <Text style={styles.buttonText}> {props.title} </Text> 
        </LinearGradient>
    );
}

export default LoginWrapper;