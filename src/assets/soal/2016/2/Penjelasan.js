import React from 'react';
import {
    StyleSheet,
    Text,
    Image
} from 'react-native';

function Penjelasan(){
    return(
        <>
        <Text style={styles.txIsiPenjelasan}>
            Menempatkan kartu secara berurutan, kita mendapatkan: 
        </Text>
        <Image style={styles.gmbr} source={require('./img/gbr3.png')}/>
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
    gmbr: {
        marginLeft: 20,
        width: '100%',
        height: 300
    }
})

export default Penjelasan;