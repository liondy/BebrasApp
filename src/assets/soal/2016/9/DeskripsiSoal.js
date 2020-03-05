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
                Sebuah kelompok berjumlah 4 berang-berang memainkan 
                "kursi-musik" yaitu berpindah kursi saat musik dimainkan.{"\n"}

                Saat musik dimulai, setiap berang-berang harus berpindah 
                ke kursi searah dengan putaran jarum jam. Satu kursi dapat 
                ditempati oleh lebih dari satu berang-berang.{"\n"}

                Pada setiap putaran, Berang-berang (A) akan berpindah 
                tiga (3) kursi. Berang-berang (C) akan berpindah dua 
                (2) kursi, sedangkan Berang-berang (B, D) hanya akan
                berpindah satu (1) kursi. Semua brang-berang berpindah 
                searah jarum jam.{"\n"}
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
        fontSize: 15,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
})

export default DeskripsiSoal;