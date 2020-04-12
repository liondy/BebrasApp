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
            source = {require('./img/bgsoal.png')}>
            <Text style={styles.txTantangan}> 
                Jika nama ninjanya adalah "zukume moru",
                siapa namanya yang sesungguhnya?
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
        textAlign: 'justify',
        padding : 15,
        margin : 10
    },
    bg : {
        resizeMode : 'stretch',
        width : 400,
        height : 350
    }
})

export default Soal;