import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Image
} from 'react-native';

function Penjelasan(){
    return(
        <ScrollView>
            <Text style={styles.txIsiPenjelasan}>
            After “Eve and Chad, swap your brushes!”
            </Text>
            <Image source={require('./img/gbr2.png')}/>
            <Text style={styles.txIsiPenjelasan}>
            After “Eve and Chad, swap your brushes!”
            </Text>
            <Image source={require('./img/gbr3.png')}/>
            <Text style={styles.txIsiPenjelasan}>
            All that remains is to swap Ben and Dan's brushes.
            </Text>
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
})

export default Penjelasan;