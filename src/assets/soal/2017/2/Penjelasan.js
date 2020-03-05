import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        // <image></image>
        <Text>
            MIRIAM requires 12 taps: M=1, I=3, R=3, I=3, A=1, M=1.{'\n'}
            IRIS requires 13 taps: I=3, R=3, I=3, S=4.{'\n'}
            EMMA requires 5 taps: E=2, M=1, M=1, A=1.{'\n'}
            INA requires 6 taps: I=3, N=2, A=1.{'\n'}
            So INA is the correct name.{'\n'}
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