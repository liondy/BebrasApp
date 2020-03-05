import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text>
            Anda harus teliti mengamati perubahan setiap huruf. 
            Kunci adalah berapa posisi anda harus bergeser dari 
            satu huruf ke huruf lainnya untuk mendapatkan kodenya. 
            Kunci juga menunjukkan bagaimana memperoleh sebuah pesan 
            yang sudah terkode menjadi pesan asal.{'\n'}
        </Text>
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