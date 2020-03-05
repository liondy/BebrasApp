import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text style={styles.txIsiPenjelasan}>
            A salah sebab ada paling tidak 1 kolom dengan dua stiker yang sama.
            B salah sebab ada paling tidak 1 baris dengan dua stiker yang sama.
            D salah sebab ada paling tidak 1 baris dengan dua stiker yang sama.
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