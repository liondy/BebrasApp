import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text>
            Jika kita mengurutkan data mobil lewat yang diberikan, 
            nilai yang ketiga (di tengah) adalah 10, data dari mobil berwarna biru.
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