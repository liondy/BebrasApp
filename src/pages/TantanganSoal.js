import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    BackHandler,
    Alert,
    TouchableOpacity
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Modal from 'react-native-modal';
import Soal20161 from '../assets/soal/2016/1/Soal';
import Pilihan20161 from '../assets/soal/2016/1/Pilihan';
import Jawaban20161 from '../assets/soal/2016/1/Jawaban';
import { quiz } from '../../App';

function GambarBenar(){
    return(
        <View style={styles.penjelasanContainer}>
            <Image source={require('../assets/picture/hasilJawaban/BebrasBenar.png')}/>
            <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiBenar.png')}/>
        </View>
    );
}

function GambarSalah(){
    return(
        <View style={styles.penjelasanContainer}>
            <Image source={require('../assets/picture/hasilJawaban/BebrasSalah.png')}/>
            <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiSalah.png')}/>
        </View>
    )
}

export {GambarBenar};
export {GambarSalah};


var temp = 0; //bener atau salah
var currentTime;
function checkTime(time){
    if(time==0){
        currentTime = 180;
    }
    else{
        currentTime = time;
    }
}

var currentNilai = 0;

function TantanganSoal({route,navigation}){
    const[isVisible,toggle]=React.useState(false);
    const { tahunId } = route.params;
    const { nomor } = route.params;
    const { jumlahSoal } = route.params;
    const { time } = route.params;
    const { nilai } = route.params;

    currentNilai = nilai;

    const showJawaban = (x) => {
        temp = x;
        toggle(currentIsOpen => !currentIsOpen);
    }

    var soal;
    var pilihan;
    var jawaban;

    if(tahunId=='2016'){
        switch(nomor){
            case 1:
                soal = <Soal20161/>;
                pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20161/>
                break;
            default:
                soal = <Soal20161/>;
                pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20161/>
                break;
        }
    }

    React.useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', function(){
            Alert.alert(
                'Keluar?',
                'Apakah kamu yakin ingin keluar dari game ini?',
                [
                    {
                        text: 'Tidak',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'Iya', onPress: () => {navigation.navigate('Home'),currentTime=180}},
                ],
                {cancelable: false},
            );
            return true;
        });
    });
    checkTime(time);

    return(
        <>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../assets/picture/backgrounds/primary.png')}>
                    <CountDown style={styles.waktu}
                        until={currentTime}
                        onChange = {()=>{
                            currentTime = currentTime-1
                        }}
                        size={15}
                        onFinish={()=> {
                            toggle(currentIsOpen=>!currentIsOpen),
                            wrong.play(),
                            currentTime = 180
                        }}
                        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFBD33'}}
                        digitTxtStyle={{color: '#F0B50B'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: null, s: null}}
                        separatorStyle={{color: '#F0B50B'}}
                        showSeparator
                    />
                    <View style={styles.tantanganCont}>
                        <ImageBackground
                            source={require('../assets/picture/tantangan/Dasar.png')}
                            style={styles.dasar}>
                            {soal}
                            <TouchableOpacity 
                                style={styles.toBtn}
                                onPress={() => navigation.navigate('IsiSoal',{
                                    number: nomor,
                                    awal: 1,
                                    time: currentTime,
                                    pertama: false,
                                })}>
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
                    <View style={{width: '100%',height: '100%',marginTop: 10}}>
                        {jawaban}
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                onPress={() => {temp==1?navigation.navigate('PenjelasanScreen',{
                                    tahunId: tahunId,
                                    nomor: nomor,
                                    nilai: currentNilai+10,
                                }):navigation.navigate('PenjelasanScreen',{
                                    tahunId: tahunId,
                                    nomor: nomor,
                                    nilai: currentNilai
                                }),toggle(currentIsOpen => !currentIsOpen)}}>
                                <Image source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
                            </TouchableOpacity>
                            {temp==1?<GambarBenar/>:<GambarSalah/>}
                        </View>
                        
                        <TouchableOpacity
                            style={styles.btnNext}
                            onPress={() => {temp==1?navigation.navigate('IsiSoal',{
                                tahunId: tahunId,
                                nilai: currentNilai+10,
                                awal: 2,
                                pertama: true,
                            }):navigation.navigate('IsiSoal',{
                                tahunId: tahunId,
                                nilai: currentNilai,
                                awal: 2,
                                pertama: true,
                            }),
                            toggle(currentIsOpen => !currentIsOpen),
                            quiz.play()}}>
                            <Image source={require('../assets/picture/hasilJawaban/next.png')}/>
                        </TouchableOpacity>
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
    },
    btnNext: {
        alignSelf: 'flex-end'
    },
})

export default TantanganSoal;