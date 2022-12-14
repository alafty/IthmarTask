import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from './Colors'
import React from "react";

const styles = StyleSheet.create({
    background:{
        backgroundColor: Colors.background,
        margin: 20,
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.pink
    },
    header:{
        flex:1,
        backgroundColor: Colors.pink,
        justifyContent: 'space-between',
    },
    footer:{
        flex: 1,
        backgroundColor: Colors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: -5},
        shadowOpacity: 0.2,
        shadowRadius: 15,
    },
    logo:{
        width: '60%',
        height: '30%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '25%'
    },
    input:{
        fontSize: 20,
        width: '90%',
        paddingVertical: 10,
        paddingStart: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.pink,
        marginVertical: 10,
        color: 'black',
        margin: 20,

    },
    inputFocus:{
        fontSize: 20,
        backgroundColor: 'white',
        width: '90%',
        paddingVertical: 10,
        paddingStart: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.pink,
        marginVertical: 10,
        color: 'black',
        margin: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        shadowOpacity: 0.1
    },
    loginButton:{
        width: '90%',
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 20
    },
    heading:{
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        paddingStart: 15
    },
    footnote:{
        fontSize: 16,
        fontWeight: '200',
        opacity: 0.75,
        paddingTop: 5,
        paddingStart: 22,
        marginBottom: 20
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        padding: 10,
        color: '#fff'
    },
    boxLogo:{
        width: 90,
        height: 90,
        resizeMode: 'cover' ,
        alignSelf: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    },
    boxTitle:{
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.8,
        paddingTop: 5
    },
    boxSubtitle:{
        fontSize: 12,
        fontWeight: '200',
        color: 'purple',
        paddingTop: 5
    },
    filterIcon:{
        width: 40,
        height: 40,
        backgroundColor: Colors.pink,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 0},
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterText:{
        fontSize: 12,
        color: 'white',
        fontWeight: '400',
    },
    topBar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    error:{
        fontSize: 14, 
        paddingLeft: 20, 
        color: 'red', 
        marginBottom: 0, 
        fontWeight: '600'
    },
    dropdown:{
        width: 110,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: Colors.gradient2
    }
  });

  export {styles};