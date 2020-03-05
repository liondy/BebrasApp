import React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { correct, quiz } from '../../../../../App';
import { wrong } from '../../../../../App';

function Pilihan({showJawaban}){
    return(
        <>
            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>4</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>15</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>9</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    correct.play();
                }}
                onPress={()=> showJawaban(1)}>
                <Text style={styles.txPilihan}>13</Text>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    btnPilihan:{
        borderRadius: 50,
        marginBottom: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    txPilihan: {
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left'
    },
})

export default Pilihan;