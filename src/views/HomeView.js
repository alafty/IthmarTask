import * as React from "react";
import {View, Text, FlatList, Image, Pressable, ScrollView, ImageBackground} from "react-native"
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
        console.warn(services.services[0]);
      },[]);

      var GovernOrgs = "Govern. Orgs";
      var Telecom= "Telecom Co.";

      //console.warn(services.services[0].Banking[0].logo);
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
    );
}

const HomeBox = (props) => {
    console.warn(props.uri);
    const image = {uri: props.uri};
    return(
        <View style={{alignItems: 'center'}}>
                <Pressable>
                    <Image source={{uri: props.uri}} style={styles.boxLogo} />
                </Pressable>
            <Text style={styles.boxTitle}> {props.title} </Text>
            <Text style={styles.boxSubtitle}> {props.subtitle} </Text>
        </View>
    );  
}

const SectorView = (serviceArray) => {
    let colorsArray =  ['#26ad6a', '#ff0000', '#ff5f44', '#ff5f44', '#006536', '#20347c', '#ef9e81', '#ef9e81', '#fdbf26', '#00af14', '#3d5cab', '#ea5921v' ];
    const renderItem = ({ item }) => (
        <HomeBox 
        uri= {item.logo}
        title={item.name}
        subtitle={item.subtitle}
        color= {colorsArray[Math.floor(Math.random() * colorsArray.length)]}
        />
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

            <Text style= {{ fontSize: 14, fontWeight: '600', color: Colors.pink }}> See More </Text>
        </View>
    );
}

               

export default HomeWrapper;