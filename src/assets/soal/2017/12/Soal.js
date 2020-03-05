import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Soal(){
    return(
        <Text style={styles.txTantangan}> 
           Permukaan dengan angka berapakah yang menghadap ke atas?
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