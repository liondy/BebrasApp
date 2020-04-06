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
        <ScrollView>
            <Text style={styles.textSoal} numberOflines={10}>
                Violeta ingin mengirim pesan kepada Leo. Pesan dipeceh menjadi potongan
                maksimal 3 huruf yang dituliskan dalam kartu dan diberi nomor urut.
                Untuk mengerti pesan aslinya, Leo harus mengurutkan kartu sesuai nomor
                kartu.{"\n"}
                Misalnya, untuk mengirim pesan DanceTime, Violeta membuat 3 kartu 
                sebagai berikut : 
            </Text>
            <Image style={styles.gmbr} source={require('./img/gbr1.png')}/>
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
        padding: 15,
        textAlign: 'justify'
    },
    gmbr: {
        resizeMode: 'stretch',
        marginLeft: 50,
        width: 200,
        height: 60
    }
})

export default DeskripsiSoal;