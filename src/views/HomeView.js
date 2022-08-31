import * as React from "react";
import {View, Text, FlatList, Pressable, Image, ScrollView} from "react-native"
import {styles} from '../Styles'
import {Colors} from '../Colors'
import { useEffect } from "react";
import {useSelector, useDispatch, Provider} from 'react-redux'
import { store } from "../redux/Store";
import {fetchData}  from "../redux/Actions";
import LinearGradient from "react-native-linear-gradient";
import { LoginButton } from "./LoginView";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from 'react-native-select-dropdown'


//wraps homeview with a provider 
//in order to use dispatch
const HomeWrapper = ({navigation}) => {
    return (
      <Provider store={store}>
        <HomeView navigation={navigation}/>
      </Provider>
    )
  }

//home screen
const HomeView = ({navigation}) => {
    const services = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const locations = ['Cairo, Egypt', 'Giza, Egypt', 'Alexandria, Egypt'];
    useEffect(() => {
        dispatch(fetchData());
        //console.warn(services);
      },[]);

      var GovernOrgs = "Govern. Orgs";
      var Telecom= "Telecom Co.";

      //console.warn(services.services[0].Banking[0].logo);
    return(
        <SafeAreaView edges={['top']} >
            {renderLoginButton({navigation})}
            <ScrollView style= {styles.background}>
            
                <View style= {styles.topBar}>
                    <FilterBox locations={locations}/>
                    <View style={{
                        width: 40, 
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white', 
                        borderRadius: 5}}>
                            <Image source={require('../../Assets/Magnify.png')} style={{width: 20, height: 20, resizeMode: 'center'}} />
                    </View>
                </View>
                <Category sectorTitle= "Banking" />
                <SectorView serviceArray= {services.services[0].Banking} />
                <Category sectorTitle= "Hospitals" />
                <SectorView serviceArray= {services.services[1].Hospitals} />
                <Category sectorTitle= "Govern Orgs." />
                <SectorView serviceArray= {services.services[2][GovernOrgs]} />
                <Category sectorTitle= "Telecom Co." />
                <SectorView serviceArray= {services.services[3][Telecom]} />
                <Category sectorTitle= "Insurance" />
                <SectorView serviceArray= {services.services[4].Insurance} />
                <Category sectorTitle= "Web" />
                <SectorView serviceArray= {services.services[5].Web} />
                 
            </ScrollView>
        </SafeAreaView>
    );
}

//renders "you're not logged in" section 
//when user hasn't logged in
function renderLoginButton({navigation}) {
    const data = useSelector(state => state.userReducer);
    if (!data.loggedIn) {
    return(
        <SafeAreaView style={{
            alignItems: 'center', 
            paddingTop: 20,
            backgroundColor: Colors.background,
            zIndex: 10,
            shadowColor: 'black',
            shadowOffset: {width: 5, height: -10},
            shadowRadius: 15,
            shadowOpacity: 0.2,
            borderRadius: 20
            }}>
            <Text style={[styles.heading, {fontSize: 20, color: 'black', opacity: 0.8}]}> You're Not Logged In</Text>
            <Pressable onPress={() => navigation.navigate('login-view')} style={{width: '100%'}}>
                <LoginButton title= "Login" />
            </Pressable>
        </SafeAreaView>
        
        );
    }
}

//main box component in homescreen 
//including image, title, and subtitle
const HomeBox = (props) =>  { 
    return (
    <View style={{alignItems: 'center'}}>
            <Pressable>
                <Image source={{uri: props.uri}} style={styles.boxLogo} />
            </Pressable>
        <Text style={styles.boxTitle}> {props.title} </Text>
        <Text style={styles.boxSubtitle}> {props.subtitle} </Text>
    </View>
);
}

//renders a whole sector's boxes 
const SectorView = (serviceArray) => {
    let colorsArray =  ['#26ad6a', '#ff0000', '#ff5f44', '#ff5f44', '#006536', '#20347c', '#ef9e81', '#ef9e81', '#fdbf26', '#00af14', '#3d5cab', '#ea5921v' ];
    const renderItem = ({ item }) => (
        <HomeBox 
        uri= {item.logo}
        title={item.name}
        subtitle={item.subtitle}
        color= {colorsArray[Math.floor(Math.random() * colorsArray.length)]} />
      );
    return(
    <FlatList 
    horizontal= {true} 
    showsHorizontalScrollIndicator={false}
    data= {serviceArray.serviceArray}
    renderItem= {renderItem}
    style= {{paddingTop: 10}}
    />
    );
}

//redners location filter element on top
const FilterBox = (props) => {
    return(
        <View style= {{flexDirection: 'row'}}>
                <View style={styles.filterIcon}>
                    <Image source={require('../../Assets/Map-Pin.png')}  style={{width: 30, height: 30}}/>
                </View>
                <SelectDropdown 
                buttonStyle={styles.dropdown}
                buttonTextStyle= {styles.filterText}
                rowStyle={styles.dropdownItem}
                rowTextStyle={{fontSize: 12, color: 'black'}}
                data={props.locations}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }} />
        </View>
    );
}

//renders sector title and see more button
//e.g. (Banking         see more)
const Category = (props) => {
    return(
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'baseline'
        }}>
            <Text style={{fontSize: 24, fontWeight: '700', opacity: 0.8}}> {props.sectorTitle} </Text>

            <Text style= {{ fontSize: 14, fontWeight: '600', color: Colors.pink }}> See More </Text>
        </View>
    );
}

               

export default HomeWrapper;