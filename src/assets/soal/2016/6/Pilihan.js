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
                onPress={()=> showJawaban(1)}>
                <Text style={styles.txPilihan}>C</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    correct.play();
                }}
                onPress={()=> showJawaban(1)}>
                <Text style={styles.txPilihan}>A</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>F</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>E</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>D</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressOut={()=> {
                    quiz.pause();
                    wrong.play();
                }}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>B</Text>
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
        textAlign: 'center'
    },
})

export default Pilihan;