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
        <ImageBackground
        style={styles.background}
        source={require('./img/bgsoal.png')}>
        <ScrollView>
                <Text style={styles.textSoal} numberOflines={10}>
                    Bebras Zac dan bebras Pan ingin melakukan perjalanan sepanjang
                    lintasan seperti pada gambar di bawah ini. Zac ingin berjalan dari 
                    titik 1 ke titik 2 dan Pan ingin berjalan dari titik 2 ke titik 1.{"\n"}

                    Sepanjang lintasan, terdapat huruf-huruf (‘B’, ‘E’,’R’,’A’, dan ‘S’)
                    yang harus Zac dan Pan catat. Zac dan Pan hanya dapat mencatat huruf
                    yang terletak pada sisi kiri mereka. Ketika Zac dan Pan mencapai akhir
                    dari lintasan, mereka akan menghasilkan sebaris huruf yang sudah mereka
                    kumpulkan sebagai catatan.
                </Text>

                <Image style={styles.gmbr} source={require('./img/gbr1.png')}/>
        </ScrollView>
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
        padding: 15,
        textAlign: 'justify'
    },
    gmbr: {
        marginLeft: 5,
        width: '100%',
        height: 300,
        alignSelf: 'center'
    }
})

export default DeskripsiSoal;