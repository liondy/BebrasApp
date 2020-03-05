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
                Terdapat 12 tempat untuk parkir mobil di area parkir. 
                Setiap tempat diberi nomor. Gambar di bawah ini menunjukkan 
                kondisi area parkir pada hari Senin dan kondisi pada hari Selasa.{'\n'} 
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