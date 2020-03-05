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
                Jeni si berang-berang cantik, pergi ke sekolah dengan berjalan kaki. 
                Peta jalan yang dapat dilalui dari rumah ke sekolah seperti berikut:{"\n"}
                <Image></Image>
                <Text>
                Jeni senang menempuh jalur yang berbeda-beda setiap hari. Dia hanya 
                berjalan sepanjang jalan yang tersedia seperti pada gambar. Jalan yang 
                Jeni gunakan pasti selalu mengarah ke sekolah. Artinya Jeni tidak akan
                menggunakan jalan yang menjauhi sekolah.{"\n"}
                </Text>
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