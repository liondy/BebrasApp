import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground,
    Button
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import Modal from 'react-native-modal';
import Soal20161 from '../assets/soal/2016/1/Soal';
import Pilihan20161 from '../assets/soal/2016/1/Pilihan';
import Jawaban20161 from '../assets/soal/2016/1/Jawaban';

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


var temp = 0; //bener atau salah
// var soal = <Soal20161/>
// var pilihan = <Pilihan20161 onPress={()=>this.toggle,this.temp}/>

function TantanganSoal({route,navigation}){
    const[isVisible,toggle]=React.useState(false);
    const { tahunId } = route.params;
    const { nomor } = route.params;
    const { jumlahSoal } = route.params;

    const showJawaban = (x) => {
        temp = x;
        toggle(currentIsOpen => !currentIsOpen);
    }

    var soal = <Soal20161/>
    var pilihan = <Pilihan20161 showJawaban={showJawaban}/>
    var jawaban = <Jawaban20161/>

    React.useEffect(()=>{
        if(tahunId=='2016'){
            switch(nomor){
                case 1:
                    soal = <Soal20161/>;
                    pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                    jawaban = <Jawaban20161/>
                    break;
                default:
                    break;
            }
        }
    });

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
                                onPress={() => navigation.navigate('IsiSoal')}
                                style={styles.toBtn}>
                                <Image
                                    style={styles.btnback}
                                    source={require('../assets/picture/tantangan/ButtonSoal.png')}/>
                            </TouchableOpacity>
                        </ImageBackground> 
                    </View> 
                </ImageBackground>
            </View>
            <View style={styles.container}>
                {pilihan}
                <Modal
                    style={styles.modal}
                    visible={isVisible}
                    backdropColor="white"
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}>
                    <View>
                        <View>
                            {jawaban}
                            {temp==1?<GambarBenar/>:<GambarSalah/>}
                        <TouchableHighlight>
                                <Button title="Close" onPress={() => 
                                toggle(currentIsOpen => !currentIsOpen)}/>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
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
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        backgroundColor: 'white'
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