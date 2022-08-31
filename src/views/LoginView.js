import * as React from "react";
import { View, Text, TextInput, Pressable, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Styles';
import {Colors} from '../Colors';
import { useDispatch, useSelector, Provider} from "react-redux";
import { store } from '../redux/Store'
import { login } from "../redux/Actions";
import { useState } from "react";

const LoginWrapper = ({navigation}) => {
    return (
      <Provider store={store}>
        <LoginView navigation={navigation} />
      </Provider>
    )
  }

const LoginView = ({navigation}) => {
    const loginData = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

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
                <Text style={{fontSize: 14, paddingLeft: 20, color: 'red', marginBottom: 0, fontWeight: '600'}}>{error}</Text>
                <TextInput  autoCorrect={false} style= {styles.input} placeholder="Username" onChangeText={newText => setUsername(newText)}/>
                <TextInput secureTextEntry={true} style= {styles.input} placeholder="Password"/>

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
                    <Pressable 
                    style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%'} }
                    onPress={() => navigation.navigate('home-view')}>
                        <Text style={[styles.footnote, {paddingEnd: 20}]}> Skip for now </Text>
                    </Pressable>
                </Pressable>
                

            </View>
        </View>
    
    );
}

export const LoginButton = (props) => {
    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.gradient1, Colors.gradient2]} style={styles.loginButton}>
             <Text style={styles.buttonText}> {props.title} </Text> 
        </LinearGradient>
    );
}
export default LoginWrapper;