import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ImageBackground
        style={styles.background}
        source={require('./img/bgsoal.png')}>
            <View style={{padding: 10, marginBottom: 30}}>
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
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        resizeMode: 'stretch',
        width: 370,
        height: 600,
        alignSelf: 'center'
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        textAlign: 'justify'
    },
    gmbr: {
        resizeMode: 'stretch',
        width: 250,
        height: 100,
        alignSelf: 'center'
    }
})

export default DeskripsiSoal;