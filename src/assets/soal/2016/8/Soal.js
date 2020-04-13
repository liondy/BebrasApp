import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';

function Soal(){
    return(
        <ImageBackground
        style = {styles.bg}
        imageStyle={{ borderRadius: 45}}
        source = {require('./img/bgsoal.png')}>
        <Text style={styles.txTantangan}> 
            Jika si Bebras ingin memenangkan koin 
            seperti pada kondisi awal (panah menunjuk 
            warna merah dengan gambar koin seperti pada 
            kondisi awal), berapa kali putaran roda paling 
            sedikit yang perlu dilakukan dari kondisi awal?
        </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    txTantangan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        includeFontPadding: true,
        textAlign: 'justify',
        padding : 15,
        margin : 10,
    },
    bg : {
        resizeMode : 'stretch',
        width : 400,
        height : 350
    }
})

export default Soal;