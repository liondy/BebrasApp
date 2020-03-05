//dari soal 2014 tic tac toe
import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ScrollView>
                <Text style={styles.textSoal} numberOflines={10}>
                You are playing a game of tic-tac-toe with your friend. 
                First your friend has to place an 'O', then you place your 'X'.
                You continue taking turns in this way. The player who places their three
                marks in a horizontal, vertical or diagonal line wins.
                It is your turn to put an 'X' in the grid below:{'\n'}
                    {/* <Image></Image> */}
                </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bgSoal:{
        width: '100%',
        height: '100%'
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
})

export default DeskripsiSoal;