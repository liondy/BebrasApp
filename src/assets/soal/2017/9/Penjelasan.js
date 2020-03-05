import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <View>
            <Text>
            Kita dapat melihat tempat mana yang dipakai dengan menempatkan mobil-mobil
             dari kedua hari di arena parkir secara bersamaan.{'\n'}
            </Text>
            {/* <Image></Image> */}
            <Text>
            Kemudian kita dapat menghitung banyaknya tempat kosong untuk menentukan 4 tempat
             kosong pada hari Senin maupun hari Selasa.{'\n'}
            </Text>
        </View>
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