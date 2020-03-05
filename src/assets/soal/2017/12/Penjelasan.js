import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text>
        Jika pergerakan dadu ditelusuri, 
        urutan dari permukaan yang di atas adalah: 6, 5, 1, 2, 4, 5.{'\n'}
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