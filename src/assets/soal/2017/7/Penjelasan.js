import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text>
            Dalam tantangan ini, toko donat adalah komputer processor. 
            Berang-berang adalah prosesnya. Donat yang mereka pesan adalah 
            waktu yang diperlukan untuk setiap proses. Tantangan ini menggunakan 
            metode penjadwalan algoritma Round Robin.
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