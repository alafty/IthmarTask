import * as React from "react";
import {View, Text, FlatList, Image, Pressable, ScrollView} from "react-native"
import {styles} from '../Styles'
import {Colors} from '../Colors'
import { useEffect } from "react";
import {useSelector, useDispatch, Provider} from 'react-redux'
import { store } from "../redux/Store";
import {fetchData, fetchMoreData}  from "../redux/Actions";
import LinearGradient from "react-native-linear-gradient";
import { Home } from "@material-ui/icons";
import { padding } from "@mui/system";


const HomeWrapper = () => {
    return (
      <Provider store={store}>
        <HomeView />
      </Provider>
    )
  }

const HomeView = () => {
    const services = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
        console.warn(services);
      },[]);

    return(
        <ScrollView style= {styles.background}>
            <View style= {styles.topBar}>
                <FilterBox title="Cairo,Egypt"/>
                <View style={{
                    width: 40, 
                    height: 40, 
                    backgroundColor: 'white', 
                    borderRadius: 5}} />
            </View>
            <Category sectorTitle= "Banking" />
            <SectorView />
            <Category sectorTitle= "Hospitals" />
            <SectorView />
            <Category sectorTitle= "Govern Orgs." />
            <SectorView />
            <Category sectorTitle= "Telecom Co." />
            <SectorView />
            <Category sectorTitle= "Insurance" />
            <SectorView />
            <Category sectorTitle= "Web" />
            <SectorView />
        </ScrollView>
    );
}

const HomeBox = (props) => {
    return(
        <View style={{alignItems: 'center'}}>
            <Pressable style= {[styles.box, {backgroundColor: props.color}]}>
                <Image source={props.uri} style={styles.smallLogo}/>
            </Pressable>
            <Text style={styles.boxTitle}> {props.title} </Text>
            <Text style={styles.boxSubtitle}> {props.subtitle} </Text>
        </View>
    );  
}

const SectorView = () => {
    return(
        <ScrollView horizontal= {true} showsHorizontalScrollIndicator= {false} style={{paddingTop: 10}}>
            <HomeBox uri={require('../../Assets/Logo.png')} title= 'Bank1' subtitle= 'Banking' color='green' />
            <HomeBox uri={require('../../Assets/Logo.png')} title= "Bank2" color='blue' />
            <HomeBox uri={require('../../Assets/Logo.png')} title= "Bank3" color='red' />
            <HomeBox uri={require('../../Assets/Logo.png')} title= "Bank4" subtitle= 'Also Banking' color='black'/>
            <HomeBox uri={require('../../Assets/Logo.png')} title= "Bank5" color='gray'/>
            <HomeBox uri={require('../../Assets/Logo.png')} title= "Bank6" color='green'/>
        </ScrollView>
    )
}

const FilterBox = (props) => {
    return(
        <View style= {styles.filter}>
                <View style={styles.filterIcon}/>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.gradient1, Colors.gradient2]} style={styles.filterData}>
                    <Text style={styles.filterText}>{props.title}</Text>
                </LinearGradient>
        </View>
    );
}

const Category = (props) => {
    return(
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'baseline'
        }}>
            <Text style={{fontSize: 24, fontWeight: '700', opacity: 0.8}}> {props.sectorTitle} </Text>

            <Text style= {{ fontSize: 14, fontWeight: '600', color: Colors.pink, }}> See More </Text>
        </View>
    );
}

               

export default HomeWrapper;