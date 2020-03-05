import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Soal(){
    return(
        <Text style={styles.txTantangan}> 
            place your 'X’ so that you have the best chance of winning.
        </Text>
    )
}

const styles = StyleSheet.create({
    txTantangan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
})

export default Soal;