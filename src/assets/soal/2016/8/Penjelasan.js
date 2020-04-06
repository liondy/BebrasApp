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
            Jalan paling pendek untuk menempatkan tanda panah
            ke koin adalah memutarnya searah jarum jam sebanyak 
            4 kali. Cara lain adalah memutar berlawanan arah 
            dengan jarum jam sebanyak 8 kali, tetapi bukan yang 
            paling sedikit.
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