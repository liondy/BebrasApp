import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Soal(){
    return(
        <Text style={styles.txTantangan}> 
            Merek apakah sepatu yang dipilih Sarah?
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
        padding: 15,
        textAlign: 'justify'
    },
})

export default Soal;