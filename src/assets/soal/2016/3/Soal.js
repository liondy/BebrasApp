import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View
} from 'react-native';

function Soal(){
    return(
    <ImageBackground
        style={styles.bg}
        imageStyle={{ borderRadius: 45}}
        source={require('./img/bgsoal.png')}>
        <Text style={styles.txTantangan}> 
            Apakah barisan huruf yang berhasil dicatat oleh masing masing
            berang berang tersebut di akhir perjalanan mereka ?
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
        margin : 10,
        padding : 15,
        textAlign : 'justify'
    },
    bg : {
        resizeMode : 'stretch',
        width : 400,
        height : 350
    }
})

export default Soal;