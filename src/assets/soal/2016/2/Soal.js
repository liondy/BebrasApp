import React from 'react';
import {
    StyleSheet,
    Text,
    Image
} from 'react-native';

function Soal(){
    return(
        <Text style={styles.txTantangan}> 
            Saat Leo menerima urutan kartu berikut : 
            <Image source={require('./img/gbr2.png')}/>
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
    }
})

export default Soal;