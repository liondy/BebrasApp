import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ScrollView>
            <ImageBackground 
                style={styles.bgSoal}
                source={require('../../../picture/soal/bgsoal.png')}>
                <Text style={styles.textSoal} numberOflines={10}>
                Yaya punya 3 gambar bebras bermain pedang dan perisai sebagai berikut{'\n'} 
                    <Image></Image>
                    <Text>
                    Yaya ingin membuat sebuah gambar, di mana setiap pedang harus menunjuk 
                    pada berang-berang yang lain, dan setiap perisai harus menghalangi pedang 
                    yang ditunjukkan kepadanya.
                    </Text>
                </Text>
            </ImageBackground>
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
})

export default DeskripsiSoal;