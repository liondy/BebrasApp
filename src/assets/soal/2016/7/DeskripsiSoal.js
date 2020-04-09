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
            <View style={{padding: 10, marginBottom: 10}}>
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
                <ScrollView horizontal={true}>
                <Image style={styles.gbr} source={require('./img/gbr1.png')}/>
                </ScrollView>
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
    gbr: {
        resizeMode: 'stretch',
        width: 500,
        height: 100
    }
})

export default DeskripsiSoal;