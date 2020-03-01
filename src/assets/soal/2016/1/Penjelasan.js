import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text style={styles.txIsiPenjelasan}>
            Kamu dapat menggambar suatu diagram dengan kota digambarkan sebagai 
            titik dan jalur bus sebagai garis yang tidak berpotongan, seperti 
            ditunjukkan dalam gambar berikut ini. Dalam gambar terlihat jelas 
            bahwa tidakmungkin mencapai Kotalima dari Kotatiga.
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
        padding: 15
    },
})

export default Penjelasan;