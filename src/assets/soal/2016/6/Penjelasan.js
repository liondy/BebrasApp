import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text style={styles.txIsiPenjelasan}>
            Dalam informatika, evaluasi dari berbagai kondisi bukan
            hanya diperlukan dalam pemrograman saja. Dalam kehidupan 
            sehari-hari-pun demikian. Kebanyakan kasus, kita dihadapkan
            memilih berdasarkan dua kondisi di mana di natara keduanya 
            ada hubungannya. Hubungannya bisa AND di mana semua kondisi 
            harus benar, atau OR di mana cukup salah satu kondisi benar
            Pada soal di atas, kondisinya adalah AND (DAN) sebab Sarah 
            harus memilih sepatu bot DAN harganya tidak boleh lebih dari
            Rp. 100.000,-
        </Text>
    )
}

const styles = StyleSheet.create({
    txIsiPenjelasan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        marginTop: 50
    },
})

export default Penjelasan;