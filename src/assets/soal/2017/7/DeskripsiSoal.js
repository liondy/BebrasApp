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
                Toko donat di desa Bebras dapat membuat 1 donat setiap 2 menit. 
                Ada antrian di depan toko, pelanggan dilayani satu persatu. 
                Setiap pelanggan ingin membeli sejumlah donat. Saking larisnya, 
                setiap orang hanya boleh membeli 3 donat pada satu saat. 
                Jika ingin membeli lebih, harus antri lagi ke belakang. 
                Toko donat buka dan mulai membuat donat pada pukul 7 pagi, 
                dan sudah ada 3 bebras yang antri:{'\n'} 
                yang pertama adalah Ali ingin membeli 7 donat,{'\n'} 
                kedua adalah Bilgin ingin membeli 3 donat, {'\n'}
                dan yang ketiga Yasemin ingin membeli 5 donat.{"\n"}
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