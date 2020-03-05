import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Soal(){
    return(
        <Text style={styles.txTantangan}> 
           Berapa banyak tempat parkir yang tidak pernah terisi mobil 
           pada hari Senin maupun hari Selasa?
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