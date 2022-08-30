import { StyleSheet } from "react-native";
import {Colors} from './Colors'

const styles = StyleSheet.create({
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
        shadowOffset: {width: 5, height: -10},
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
    loginButton:{
        width: '90%',
        borderRadius: 8,
        margin: 20
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
    
  });

  export {styles};