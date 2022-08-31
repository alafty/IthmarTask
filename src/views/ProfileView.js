import React from "react";
import { View, Text, Pressable } from "react-native";
import { useSelector, Provider, useDispatch } from "react-redux";
import { store } from '../redux/Store'
import { Colors } from "../Colors";
import { LoginButton } from "./LoginView";
import {logout} from '../redux/Actions'

const ProfileWrapper = ({navigation}) => {
    return (
        <Provider store={store}>
          <ProfileView navigation={navigation}/>
        </Provider>
      )
}
const ProfileView = ({navigation}) => {
    const data = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    return(
        <View style={{alignItems:'flex-start', padding: 20}}>
            <DataItem title="username" data= {data.username} />
            <DataItem title="access token" data= {data.token} />
            <Pressable style={{width:'100%'}} onPress={() => {
                dispatch({
                    type: logout
                }
                );
                navigation.navigate('login-view')
            }}>
                <LoginButton title="Logout" />
            </Pressable>
        </View>
    );
}

const DataItem = (props) =>{
    return(
        <View style={{alignItems: 'flex-start'}}>
            <Text style={{color: Colors.pink, fontWeight: '600', opacity: 0.8}}>{props.title}</Text>
            <Text style={{fontSize: 20, paddingStart: 0, color: 'black', opacity: 0.8}}>{props.data}</Text>
            </View>
    );
}
export default ProfileWrapper;