import React from 'react';
import {
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

function Penjelasan(){
    return(
        <ScrollView>
            <Image style={styles.gbr} source={require('./img/gbr2.png')}/>
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
    },
    gbr: {
        resizeMode: 'stretch',
        width: 400,
        height: 300
    }
})

export default Penjelasan;