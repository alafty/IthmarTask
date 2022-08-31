import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../Colors";
import { styles } from "../Styles";

const FavouritesWrapper = ({navigation}) => {
    return (
      <Provider store={store}>
        <FavouritesView navigation={navigation}/>
      </Provider>
    )
  }
const FavouritesView = () => {
    return(
        <SafeAreaView style={{alignItems: 'center'}}>
            <Text style={{color: Colors.pink, fontSize: 32, fontWeight: '700'}}>Favourites</Text>
        </SafeAreaView>
    );
}

export default FavouritesView;