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
            <Text style={styles.textSoal} numberOflines={10}>
            Dua berang-berang bernama Justin dan Selena, mempunyai gerakan 
            tarian yang menyesuaikan jenis sorakan penonton. Mereka melakukan 
            gerakan secara bersamaan pada satu kotak, pada setiap saat sesuai 
            arah anak panah di bawah ini.{"\n"}
            Gambar berikut ini menunjukkan bagaimana kedua berang-berang akan bergerak:{"\n"}
                {/* <Image></Image> */}
                <Text>
                Sebagai contoh, jika penonton bersorak "Roar!" Justin akan bergerak satu kotak ke 
                kanan kemudian satu kotak mundur ke belakang. 
                Pada saat yang sama, Selena akan maju satu kotak ke depan dan satu kotak ke kiri. 
                Mereka mulai dengan posisi di lantai dansa sebagai berikut:{"\n"}
                </Text>
            </Text>
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