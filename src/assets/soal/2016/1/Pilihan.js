import React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { correct } from '../../../../pages/TantanganSoal';
import { wrong } from '../../../../pages/TantanganSoal';

function Pilihan({showJawaban}){
    return(
        <>
            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> correct.play()}
                onPress={()=> showJawaban(1)}>
                <Text style={styles.txPilihan}>Kotalima</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>Kotasatu</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>Kotadua</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=> showJawaban(0)}>
                <Text style={styles.txPilihan}>Kotatiga</Text>
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