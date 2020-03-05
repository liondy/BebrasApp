import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ScrollView>
            <ImageBackground 
                style={styles.bgSoal}
                source={require('../../../picture/soal/bgsoal.png')}>
                <Text style={styles.textSoal} numberOflines={10}>
                Robin si berang-berang ingin menempel kertas di dinding kamarnya yang berukuran 5x5, 
                menggunakan kertas-kertas persegi dalam berbagai ukuran dan warna. Kertas selalu 
                ditempel tanpa melampaui batas dindingnya dan tanpa mengguntingnya. Ia menumpukkan 
                kertas suatu kertas di atas kertas lain. Hasilnya adalah sebagai berikut:{"\n"}
                    <Image></Image>
                </Text>
            </ImageBackground>
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
        padding: 15
    },
})

export default DeskripsiSoal;