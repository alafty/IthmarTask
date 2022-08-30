import React, { Component, Pressable, View, Image, Text } from 'react'
import { styles } from '../Styles'

const HomeBox = (props) => {
        return(
            <Pressable style= {[styles.box, {backgroundColor:'#ddddd'}]}>
                <Image source={props.uri} style={styles.smallLogo}/>
                <Text style={styles.boxTitle}> {props.title} </Text>
            </Pressable>
        );
            
    }

    export default HomeBox;
