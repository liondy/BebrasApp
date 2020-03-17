import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <>
            <Text>
                Ada 64 apel di setiap kardus (8 kantong, 8 apel di setiap kantong). 
                Berang-berang memetik 275 apel yang memerlukan 4 kardus (275/64=4.296875).
                4 kardus tersebut diisi oleh total 64*4=256 apel.Karena setiap kantong
                bisa diisi oleh 8 apel, sisa 275-256=19 apel bisa dimasukkan ke 2 kantong (19/8=2.375).
                2 kantong ini berisi 16 apel, jadi sisanya adalah 3 apel.{'\n'}
            </Text>

            <Text>
                Untuk menganalisis pilihan jawaban yang lain:{'\n'}
                    o Jawaban a) jumlah total apel adalah 4*64 + 1*8 +6 = 270 apel.{'\n'}
                    o Jawaban b) jumlah total apel adalah 3*64 +5*8 +1 = 233 apel.{'\n'}
                    o Jawaban c) jumlah total apel adalah 3*64 +7*8 +7 = 255 apel.{'\n'}
            </Text>
        </>
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