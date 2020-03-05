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
                Jaka si berang-berang duduk di pinggir jalan menghitung mobil warna-warni yang lewat. 
                Di akhir hari ia mencatat:{"\n"}
                <Text>
                 Mobil biru ada 10{"\n"}
                 Mobil merah ada 44{"\n"}
                 Mobil putih ada 3{"\n"}
                 Mobil hijau ada 8{"\n"}
                 Mobil hitam ada 15{"\n"}

                Jaka mengetikkan angka itu memakai program komputer dan hasilnya 
                sebuah diagram batang sebagai berikut:
                </Text>
                    <Image></Image>
                    <Text>Tetapi sayangnya, diagram tersebut tidak menunjukkan warna mobil.</Text>
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