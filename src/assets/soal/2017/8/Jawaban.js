import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

function Jawaban(){
    return(
        <>
            <Text style={styles.jawaban}>Jawaban : </Text>
            <Text style={styles.penjelasan}>Jawaban yang benar adalah Ho dengan To, dan No dengan Ma.</Text>
        </>
    )
}

const styles = StyleSheet.create({
    jawaban:{
        fontSize: 30,
        color: '#FF5733',
        fontWeight: 'bold'
    },
    penjelasan: {
        fontSize: 20,
        color: '#FF5733',
        includeFontPadding: true
    },
})

export default Jawaban;