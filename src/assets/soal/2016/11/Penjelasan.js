import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

function Penjelasan(){
    return(
        <Image source={require('./img/gbr2.png')}/>
    )
}

const styles = StyleSheet.create({
    txIsiPenjelasan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        marginTop: 50
    },
})

export default Penjelasan;