import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    View
} from 'react-native';

function Soal(){
    return(
        <View style={padding=10}>
        <ImageBackground
            style={styles.bg}
            imageStyle={{ borderRadius: 45}}
            source={require('./img/bgsoal.png')}>
            <Text style={styles.txTantangan}> 
                Saat Leo menerima urutan kartu berikut : 
            </Text>
            <Image 
                style={styles.img}
                source={require('./img/gbr2.png')}/>
        </ImageBackground>
        </View>
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
        height : 350
    },
    img : {
        resizeMode : 'stretch',
        width : 350,
        height : 150,
        alignSelf : 'center'
    }
})

export default Soal;