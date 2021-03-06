import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

function Penjelasan(){
    return(
        <ScrollView>
            <Text style={styles.txIsiPenjelasan}>
            Bebras mulai berjalan dan makan loli sampai 
            menemukan sikat gigi. Gambar berikut menunjukkan
            6 (enam) loli yang dimakannya dan kapan ia
            menyikat gigi (ditandai X).{'\n'}

            {/* <Image></Image> */}
            </Text>
        </ScrollView>
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
        textAlign: 'justify'
    },
})

export default Penjelasan;