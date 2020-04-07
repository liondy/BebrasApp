import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ScrollView
} from 'react-native';

function Penjelasan(){
    return(
        <ScrollView>
            <Text style={styles.txIsiPenjelasan}>
                Menempatkan kartu secara berurutan, kita mendapatkan: 
            </Text>
            <Image style={styles.gmbr} source={require('./img/gbr3.png')}/>
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
    gmbr: {
        marginLeft: 20,
        width: 300,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'center'
    }
})

export default Penjelasan;