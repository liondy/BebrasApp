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
                Si berang-berang ingin menjadi ninja dan menentukan namanya. 
                Nama Ninja dibuat dengan mengganti setiap huruf yang berasal
                dari nama sesungguhnya dengan suku-suku kata sesuai dengan 
                tabel berikut:{"\n"}
                        <Image></Image>
                        <Text> 
                        Misalnya "BEBRAS" mmemiliki nama ninja "pikupishikaari”.{"\n"}
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