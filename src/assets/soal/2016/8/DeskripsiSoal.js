import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ImageBackground
        style={styles.background}
        source={require('./img/bgsoal.png')}>
            <View style={{padding: 20, marginBottom: 20}}>
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
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        resizeMode: 'stretch',
        width: 370,
        height: 600,
        alignSelf: 'center'
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        textAlign: 'justify'
    },
    gmbr: {
        resizeMode: 'stretch',
        width: 300,
        height: 200,
        marginLeft: 20,
        alignSelf: 'center'
    }
})

export default DeskripsiSoal;