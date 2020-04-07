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
        <ImageBackground
        style={styles.background}
        source={require('./img/bgsoal.png')}>
        <ScrollView>
                <Text style={styles.textSoal} numberOflines={10}>
                Bebras menemukan sebuah lorong yang terdiri dari sederet kotak, 
                setiap kotak berisi permen loli atau sikat gigi. Ia harus 
                berjalan sepanjang lorong menuju ujung kanan dan tidak boleh 
                mundur atau balik arah ke ujung kiri. Bebras dapat menggosok 
                gigi kalau menemukan sikat gigi. Setelah makan dua permen loli,
                ia harus menggosok gigi sebelum boleh makan lagi. Pada setiap kotak,
                ia hanya dapat makan loli, atau menggosok gigi, atau hanya berjalan.
                Dia tak boleh membawa loli ataupun sikat gigi ke langkah berikutnya.{"\n"}
                </Text>
                {/* <Image source={require('./img/gbr1.png')}/> */}
        </ScrollView>
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
        padding: 15,
        textAlign: 'justify'
    },
})

export default DeskripsiSoal;