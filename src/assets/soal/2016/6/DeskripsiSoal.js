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
                Sara ingin membeli sepatu, dan ayahnya memberi batasan
                bahwa harganya tak boleh lebih dari Rp. 100.000,- rupiah. 
                Sarah menyukai sepatu bot berwarna hitam.{"\n"}
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
        padding: 15
    },
    gmbr: {
        marginLeft: 20,
        width: '100%',
        height: 300
    }
})

export default DeskripsiSoal;