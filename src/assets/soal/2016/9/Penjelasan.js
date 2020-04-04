import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

function Penjelasan(){
    return(
        <ScrollView>
            <Text style={styles.txIsiPenjelasan}>
            Berang-berang A pindah 3 kursi se arah jarum jam.
            Jadi A akan berpindah dari kursi 1 ke 2 setelah 3 putaran.{'\n'}

            Berang-berang B pindah 1 kursi se arah jarum jam.
            Jadi B akan berpindah dari kursi 2 ke 1 setelah 3 putaran.{'\n'}

            Berang-berang C pindah 2 kursi se arah jarum jam.
            Jadi C akan berpindah dari kursi 3 ke 1 setelah 3 putaran.{'\n'}

            Berang-berang D pindah 1 kursi se arah jarum jam.
            Jadi D akan berpindah dari kursi 4 ke 3 setelah 3 putaran.{'\n'}

            Jadi, yang kosong adalah kursi 4 setelah 3 putaran{'\n'}      
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
    },
})

export default Penjelasan;