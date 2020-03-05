import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Soal(){
    return(
        <Text style={styles.txTantangan}> 
            Jika si Bebras ingin memenangkan koin 
            seperti pada kondisi awal (panah menunjuk 
            warna merah dengan gambar koin seperti pada 
            kondisi awal), berapa kali putaran roda paling 
            sedikit yang perlu dilakukan dari kondisi awal?
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