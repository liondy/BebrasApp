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
            Keluarga Bebras mempunyai kebun apel. Setelah panen, 
            mereka ingin mengemas sebaik-baiknya untuk dijual.{"\n"}

            <Text>
            Mereka mengemas sesuai aturan sebagai berikut:{"\n"}
            1. Apel ditaruh di kantong. Setiap kantong diisi dengan 8 apel. Jika tersisa kurang dari
                8 apel, apel dibiarkan tidak dikemas.{"\n"}
            2. Kantong akan dimasukkan ke kardus, Setiap kardus berisi 8 kantong. Jika tersisa kurang dari 8 kantong,
                kantong yang tersisa tidak dimasukkan ke kardus.
            </Text>
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