import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    Modal,
    Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import Soal20161 from '../assets/soal/2016/1/Soal';
import Pilihan20161 from '../assets/soal/2016/1/Jawaban';

var correct = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error)=> {
    if(error){
        console.log('failed to load the sound', error)
        return;
    }
})

export {correct};

var wrong = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error)=> {
    if(error){
        console.log('failed to load the sound', error)
        return;
    }
})

export {wrong};

function Waktu(){
    return(
        <CountDown style={styles.waktu}
            until={3*60}
            size={15}
            onFinish={()=> alert('FINISH')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFBD33'}}
            digitTxtStyle={{color: '#F0B50B'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            separatorStyle={{color: '#F0B50B'}}
            showSeparator
        />
    )
}

function GambarBenar(){
    return(
        <View style={styles.penjelasanContainer}>
            <Image source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
            <Image source={require('../assets/picture/hasilJawaban/BebrasBenar.png')}/>
            <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiBenar.png')}/>
        </View>
    );
}

function GambarSalah(){
    return(
        <View style={styles.penjelasanContainer}>
            <Image source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
            <Image source={require('../assets/picture/hasilJawaban/BebrasSalah.png')}/>
            <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiSalah.png')}/>
        </View>
    )
}

export {GambarBenar};
export {GambarSalah};

var soal = <Soal20161/>
var pilihan = <Pilihan20161/>

function TantanganSoal({navigation}){
    return(
        <>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../assets/picture/backgrounds/primary.png')}>
                    <Waktu/>
                    <View style={styles.tantanganCont}>
                        <ImageBackground
                            source={require('../assets/picture/tantangan/Dasar.png')}
                            style={styles.dasar}>
                            {soal}
                            <TouchableOpacity 
                                onPress={()=> navigation.navigate('IsiSoal')}
                                style={styles.toBtn}>
                                <Image
                                    style={styles.btnback}
                                    source={require('../assets/picture/tantangan/ButtonSoal.png')}/>
                            </TouchableOpacity>
                        </ImageBackground> 
                    </View> 
                </ImageBackground>
            </View>
            <View>
                {pilihan}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    background:{
        width: '100%',
        height: '100%'
    },
    dasar:{
        width: '100%',
        height: '85%'
    },
    btnback:{
        marginTop: -5,
        alignSelf: 'flex-end',
    },
    tantanganCont: {
        marginTop: 25,
        width: '100%',
        height: '100%',
    },
    waktu:{
        marginTop: 10
    },
    txPilihan: {
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    btnPilihan:{
        borderRadius: 50,
        marginBottom: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        height: '50%',
        width: '80%'
    },
    jawaban:{
        fontSize: 30,
        color: '#FF5733',
        fontWeight: 'bold'
    },
    penjelasan: {
        fontSize: 20,
        color: '#FF5733',
        includeFontPadding: true
    },
    penjelasanContainer: {
        flexDirection: 'row',
    },
    nilai: {
        width: 50,
        height: 50,
        marginTop: 70,
        marginRight: 10
    }
})

export default TantanganSoal;