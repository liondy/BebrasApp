import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    Image
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ScrollView>
            <Text style={styles.textSoal} numberOflines={10}>
            Si Bebras dapat memutar roda ke kanan atau ke kiri.
            Pada setiap sekali putaran, roda berputar satu langkah
            dan panah menunjuk ke warna berikutnya. Gambar berikut 
            menunjukkan kondisi awal roda, dan kondisi setelah roda
            diputar satu kali ke kiri:{"\n"}
            </Text>
            <Image style={styles.gmbr}source={require('./img/gbr1.png')}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bgSoal:{
        width: '100%',
        height: '100%'
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        textAlign: 'justify'
    },
    gmbr: {
        resizeMode: 'stretch',
        width: 300,
        height: 200,
        marginLeft: 20
    }
})

export default DeskripsiSoal;