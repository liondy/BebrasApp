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
            Jika pesan terkode adalah "lbnjtbibcbucfcsbt" 
            apa pesan aslinya jika roda dalam diputar dengan kunci= 1?
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
    bg : {
        resizeMode : 'stretch',
        width : 400,
        height : 300
    }
})

export default Soal;