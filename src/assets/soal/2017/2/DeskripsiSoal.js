//merupakan soal 2014 only nine keys
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
                Daniel is sending text messages from his old phone.
                For every letter he has to press the proper key once, twice, three
                or four times, followed by a short pause.
                In order to type 'C' he has to press the number 2 key three times
                because 'C' is the third letter written on this key.
                In order to type 'HIM' he has to press the number 4 key twice,
                followed by the number 4 key 3 times and finally the number 6
                key once.
                Daniel presses exactly six times to enter the name of a friend.{"\n"}
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