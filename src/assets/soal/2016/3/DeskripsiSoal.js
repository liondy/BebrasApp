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
                    Bebras Zac dan bebras Pan ingin melakukan perjalanan sepanjang
                    lintasan seperti pada gambar di bawah ini. Zac ingin berjalan dari 
                    titik 1 ke titik 2 dan Pan ingin berjalan dari titik 2 ke titik 1.{"\n"}

                    Sepanjang lintasan, terdapat huruf-huruf (‘B’, ‘E’,’R’,’A’, dan ‘S’)
                    yang harus Zac dan Pan catat. Zac dan Pan hanya dapat mencatat huruf
                    yang terletak pada sisi kiri mereka. Ketika Zac dan Pan mencapai akhir
                    dari lintasan, mereka akan menghasilkan sebaris huruf yang sudah mereka
                    kumpulkan sebagai catatan.

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