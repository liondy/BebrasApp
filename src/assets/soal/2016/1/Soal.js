import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';

function Soal(){
    return(
        <ImageBackground
            style={styles.bg}
            imageStyle={{ borderRadius: 45}}
            source={require('./img/bgsoal.png')}>
            <Text style={styles.txTantangan}> 
                Jika Joni memulai perjalanannya dari Kotatiga dengan bus,{"\n"}
                kota mana yang tidak dapat dikunjungi?
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    txTantangan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        margin : 10,
        textAlign: 'justify'
    },
    bg:{
        resizeMode : 'stretch',
        width : 400,
        height : 350,

    }
})

export default Soal;