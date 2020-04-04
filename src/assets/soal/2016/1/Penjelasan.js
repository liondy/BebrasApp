import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';

function Penjelasan(){
    return(
        <ScrollView>
            <Text style={styles.txIsiPenjelasan}>
            Kamu dapat menggambar suatu diagram dengan kota digambarkan sebagai 
            titik dan jalur bus sebagai garis yang tidak berpotongan, seperti 
            ditunjukkan dalam gambar berikut ini. Dalam gambar terlihat jelas 
            bahwa tidakmungkin mencapai Kotalima dari Kotatiga.
            </Text>
            <Image style={styles.gmbr} source={require('./img/gbr1.png')}/>
        </ScrollView>        
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
    },
    gmbr: {
        marginLeft: 30,
        width: 200,
        height: 200,
        resizeMode: 'stretch'

    }
})

export default Penjelasan;