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
            <Text style={styles.textSoal} numberOflines={10}>
            Seekor cacing sedang duduk di ujung cabang sebuah pohon apel. 
            Ia ingin makan semua apel yang ada lewat dahan pohon. Setiap 
            bagian dahan, panjangnya 1 meter.{'\n'} 
                {/* <Image></Image> */}
            </Text>
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