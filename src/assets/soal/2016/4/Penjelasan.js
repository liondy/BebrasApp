import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text style={styles.txIsiPenjelasan}>
            Pada tantangan ini, kamu belajar tentang "String"(untaian huruf),
            Koding(mengkodekan) dan dekoding(mengembalikan ke kode semula){"\n"}
            Mengganti sebuah huruf dengan huruf lain dalam sebuah String
            seringkali digunakan dalam pemograman, disebut "koding". Tantangan 
            ini dibuat untuk menunjukkan visualisasi tentang apa yang terjadi
            dan bagaimana sebuah huruf diganti dengan sebuah string.
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