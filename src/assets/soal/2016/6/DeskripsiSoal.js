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
            <View style={{padding: 20, marginBottom: 20}}>
        <ScrollView>
                <Text style={styles.textSoal} numberOflines={10}>
                Sara ingin membeli sepatu, dan ayahnya memberi batasan
                bahwa harganya tak boleh lebih dari Rp. 100.000,- rupiah. 
                Sarah menyukai sepatu bot berwarna hitam.{"\n"}
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
        marginLeft: 20,
        width: 300,
        height: 300,
        alignSelf: 'center',
        resizeMode: 'stretch'
    }
})

export default DeskripsiSoal;