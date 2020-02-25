import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text
} from 'react-native';
import { Button } from 'react-native-elements';
import useNavigation from '@react-navigation/native';

function IsiSoal({navigate}){
    return(
        <View style={StyleSheet.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={StyleSheet.background}>
            </ImageBackground>
        </View>
    )
}

export default IsiSoal;