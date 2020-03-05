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
            Jack menggulirkan dadu sepanjang jalan tanpa pengeseran, 
            tiga kali ke arah belakang dan dua kali berikutnya ke 
            kanan (berhenti di jalan bertanda lingkaran putih.{'\n'} 
            {/* <Image></Image> */}
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