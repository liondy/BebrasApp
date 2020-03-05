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
                Violeta ingin mengirim pesan kepada Leo. Pesan dipeceh menjadi potongan
                maksimal 3 huruf yang dituliskan dalam kartu dan diberi nomor urut.
                Untuk mengerti pesan aslinya, Leo harus mengurutkan kartu sesuai nomor
                kartu.{"\n"}
                Misalnya, untuk mengirim pesan DanceTime, Violeta membuat 3 kartu 
                sebagai berikut : 
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