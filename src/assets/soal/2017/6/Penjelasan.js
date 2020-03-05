import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <View>
            <Text>
            Kertas kuning dengan gambar tas adalah satu-satunya kertas yang 
            tidak terpotong oleh kertas lain, jadi itu pasti yang terakhir ditempel.{'\n'}
            </Text>
            <Text>
            Kita bisa melihat bahwa gambar tas itu memotong gambar bola basket, 
            kertas bola basket ditumpuk di atas kertas daun, kertas daun memotong 
            gambar bunga, kertas bunga menindih kertas cermin dan kertas cermin 
            memotong kertas bergambar hati.
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