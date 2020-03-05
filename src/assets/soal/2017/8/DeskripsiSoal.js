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
                Kepulauan Honomakato terdiri dari lima pulau yang indah yaitu 
                Ho, No, Ma, Ka, dan To. Pulau terbesar yaitu Ho terhubung ke 
                daratan (pulau utama) oleh sebuah jembatan besar terbuat dari 
                besi yang kokoh. Selain itu, terdapat jembatan-jembatan kayu 
                yang menghubungkan Ho dengan No, Ho dengan Ka, Ka dengan Ma, 
                dan Ka dengan To.{'\n'} 
                Penduduk kepulauan Honomakato berharap dibangun dua jembatan 
                kayu lagi agar jika salah satu jembatan kayu putus, setiap pulau 
                tetap masih bisa mencapai daratan lewat pulau Ho, karena jembatan 
                dari Ho ke daratan tak mungkin rusak.{'\n'} 
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