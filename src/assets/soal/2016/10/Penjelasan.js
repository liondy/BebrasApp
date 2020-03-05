import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text style={styles.txIsiPenjelasan}>
            Setelah robot mencat M-H-K-B-M-H-K-B, cat Biru habis, 
            sehingga berikutnya ia akan mencat M-H dan kemudian cat hijau habis.
            Berikutnya ia K-M-K-M dan cat merah habis. 
            Berikutnya lagi, ia mencat K dan berhenti. 
            Jadi, dengan empat kaleng cat tersebut ia dapat mencat 15 papan:
            M-H-K-B-M-H-K-B-M-H-K-M-K-M-K
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