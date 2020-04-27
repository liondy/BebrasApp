import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    BackHandler,
    Alert,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Modal from 'react-native-modal';
import { backgroundSong, quiz, wrong } from '../../App';
//2016
import Soal20161 from '../assets/soal/2016/1/Soal';
import Pilihan20161 from '../assets/soal/2016/1/Pilihan';
import Jawaban20161 from '../assets/soal/2016/1/Jawaban';
import Penjelasan20161 from '../assets/soal/2016/1/Penjelasan';

import Soal20162 from '../assets/soal/2016/2/Soal';
import Pilihan20162 from '../assets/soal/2016/2/Pilihan';
import Jawaban20162 from '../assets/soal/2016/2/Jawaban';
import Penjelasan20162 from '../assets/soal/2016/2/Penjelasan';

import Soal20163 from '../assets/soal/2016/3/Soal';
import Pilihan20163 from '../assets/soal/2016/3/Pilihan';
import Jawaban20163 from '../assets/soal/2016/3/Jawaban';
import Penjelasan20163 from '../assets/soal/2016/3/Penjelasan';

import Soal20164 from '../assets/soal/2016/4/Soal';
import Pilihan20164 from '../assets/soal/2016/4/Pilihan';
import Jawaban20164 from '../assets/soal/2016/4/Jawaban';
import Penjelasan20164 from '../assets/soal/2016/4/Penjelasan';

import Soal20165 from '../assets/soal/2016/5/Soal';
import Pilihan20165 from '../assets/soal/2016/5/Pilihan';
import Jawaban20165 from '../assets/soal/2016/5/Jawaban';
import Penjelasan20165 from '../assets/soal/2016/5/Penjelasan';

import Soal20166 from '../assets/soal/2016/6/Soal';
import Pilihan20166 from '../assets/soal/2016/6/Pilihan';
import Jawaban20166 from '../assets/soal/2016/6/Jawaban';
import Penjelasan20166 from '../assets/soal/2016/6/Penjelasan';

import Soal20167 from '../assets/soal/2016/7/Soal';
import Pilihan20167 from '../assets/soal/2016/7/Pilihan';
import Jawaban20167 from '../assets/soal/2016/7/Jawaban';
import Penjelasan20167 from '../assets/soal/2016/7/Penjelasan';

import Soal20168 from '../assets/soal/2016/8/Soal';
import Pilihan20168 from '../assets/soal/2016/8/Pilihan';
import Jawaban20168 from '../assets/soal/2016/8/Jawaban';
import Penjelasan20168 from '../assets/soal/2016/8/Penjelasan';

import Soal20169 from '../assets/soal/2016/9/Soal';
import Pilihan20169 from '../assets/soal/2016/9/Pilihan';
import Jawaban20169 from '../assets/soal/2016/9/Jawaban';
import Penjelasan20169 from '../assets/soal/2016/9/Penjelasan';

import Soal201610 from '../assets/soal/2016/10/Soal';
import Pilihan201610 from '../assets/soal/2016/10/Pilihan';
import Jawaban201610 from '../assets/soal/2016/10/Jawaban';
import Penjelasan201610 from '../assets/soal/2016/10/Penjelasan';

import Soal201611 from '../assets/soal/2016/11/Soal';
import Pilihan201611 from '../assets/soal/2016/11/Pilihan';
import Jawaban201611 from '../assets/soal/2016/11/Jawaban';
import Penjelasan201611 from '../assets/soal/2016/11/Penjelasan';

import Soal201612 from '../assets/soal/2016/12/Soal';
import Pilihan201612 from '../assets/soal/2016/12/Pilihan';
import Jawaban201612 from '../assets/soal/2016/12/Jawaban';
import Penjelasan201612 from '../assets/soal/2016/12/Penjelasan';

//2017
import Soal20171 from '../assets/soal/2017/1/Soal';
import Pilihan20171 from '../assets/soal/2017/1/Pilihan';
import Jawaban20171 from '../assets/soal/2017/1/Jawaban';
import Penjelasan20171 from '../assets/soal/2017/1/Penjelasan';

import Soal20172 from '../assets/soal/2017/2/Soal';
import Pilihan20172 from '../assets/soal/2017/2/Pilihan';
import Jawaban20172 from '../assets/soal/2017/2/Jawaban';
import Penjelasan20172 from '../assets/soal/2017/2/Penjelasan';

import Soal20173 from '../assets/soal/2017/3/Soal';
import Pilihan20173 from '../assets/soal/2017/3/Pilihan';
import Jawaban20173 from '../assets/soal/2017/3/Jawaban';
import Penjelasan20173 from '../assets/soal/2017/3/Penjelasan';

import Soal20174 from '../assets/soal/2017/4/Soal';
import Pilihan20174 from '../assets/soal/2017/4/Pilihan';
import Jawaban20174 from '../assets/soal/2017/4/Jawaban';
import Penjelasan20174 from '../assets/soal/2017/4/Penjelasan';

import Soal20175 from '../assets/soal/2017/5/Soal';
import Pilihan20175 from '../assets/soal/2017/5/Pilihan';
import Jawaban20175 from '../assets/soal/2017/5/Jawaban';
import Penjelasan20175 from '../assets/soal/2017/5/Penjelasan';

import Soal20176 from '../assets/soal/2017/6/Soal';
import Pilihan20176 from '../assets/soal/2017/6/Pilihan';
import Jawaban20176 from '../assets/soal/2017/6/Jawaban';
import Penjelasan20176 from '../assets/soal/2017/6/Penjelasan';

import Soal20177 from '../assets/soal/2017/7/Soal';
import Pilihan20177 from '../assets/soal/2017/7/Pilihan';
import Jawaban20177 from '../assets/soal/2017/7/Jawaban';
import Penjelasan20177 from '../assets/soal/2017/7/Penjelasan';

import Soal20178 from '../assets/soal/2017/8/Soal';
import Pilihan20178 from '../assets/soal/2017/8/Pilihan';
import Jawaban20178 from '../assets/soal/2017/8/Jawaban';
import Penjelasan20178 from '../assets/soal/2017/8/Penjelasan';

import Soal20179 from '../assets/soal/2017/9/Soal';
import Pilihan20179 from '../assets/soal/2017/9/Pilihan';
import Jawaban20179 from '../assets/soal/2017/9/Jawaban';
import Penjelasan20179 from '../assets/soal/2017/9/Penjelasan';

import Soal201710 from '../assets/soal/2017/10/Soal';
import Pilihan201710 from '../assets/soal/2017/10/Pilihan';
import Jawaban201710 from '../assets/soal/2017/10/Jawaban';
import Penjelasan201710 from '../assets/soal/2017/10/Penjelasan';

import Soal201711 from '../assets/soal/2017/11/Soal';
import Pilihan201711 from '../assets/soal/2017/11/Pilihan';
import Jawaban201711 from '../assets/soal/2017/11/Jawaban';
import Penjelasan201711 from '../assets/soal/2017/11/Penjelasan';

import Soal201712 from '../assets/soal/2017/12/Soal';
import Pilihan201712 from '../assets/soal/2017/12/Pilihan';
import Jawaban201712 from '../assets/soal/2017/12/Jawaban';
import Penjelasan201712 from '../assets/soal/2017/12/Penjelasan';

function GambarBenar(){
    return(
        <View style={styles.penjelasanContainer}>
            <Image style={styles.papan} source={require('../assets/picture/hasilJawaban/BebrasBenar.png')}/>
            <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiBenar.png')}/>
        </View>
    );
}

function GambarSalah(){
    return(
        <View style={styles.penjelasanContainer}>
            <Image style={styles.papan} source={require('../assets/picture/hasilJawaban/BebrasSalah.png')}/>
            <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiSalah.png')}/>
        </View>
    )
}

function HidePenjelasan(status,penjelasan){
    if(status){
        return(
            <View style={{flex: 1}}>
                <Text style={styles.txPenjelasan}>Penjelasan</Text>
                {penjelasan}
            </View>
        )
    }
}


var temp = 0; //bener atau salah
var currentTime;
var dumpTime;
function checkTime(time){
    if(time==0){
        currentTime = 180;
        dumpTime = 180;
    }
    else{
        currentTime = time;
        dumpTime = time;
    }
}

var currentNilai = 0;
var dijawab = 0;

function TantanganSoal({route,navigation}){
    const[isVisible,toggle]=React.useState(false);
    const { tahunId } = route.params;
    const { nomor } = route.params;
    const { time } = route.params;
    const { nilai } = route.params;
    const { salah } = route.params;

    currentNilai = nilai;

    const showJawaban = (x) => {
        temp = x;
        dijawab = 1;
        toggle(currentIsOpen => !currentIsOpen);
    }

    var soal;
    var pilihan;
    var jawaban;
    var penjelasan;
    const[isBenar,cek]=React.useState(false);
    const [status,ubah]=React.useState(false);

    if(tahunId=='2016'){
        switch(nomor){
            case 1:
                soal = <Soal20161/>;
                pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20161/>
                penjelasan = <Penjelasan20161/>
                break;
            case 2:
                soal = <Soal20162/>;
                pilihan = <Pilihan20162 showJawaban={showJawaban}/>
                jawaban = <Jawaban20162/>
                penjelasan = <Penjelasan20162/>
                break;
            case 3:
                soal = <Soal20163/>;
                pilihan = <Pilihan20163 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20163/>
                penjelasan = <Penjelasan20163/>
                break;
            case 4:
                soal = <Soal20164/>;
                pilihan = <Pilihan20164 showJawaban={showJawaban}/>
                jawaban = <Jawaban20164/>
                penjelasan = <Penjelasan20164/>
                break;
            case 5:
                soal = <Soal20165/>;
                pilihan = <Pilihan20165 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20165/>
                penjelasan = <Penjelasan20165/>
                break;
            case 6:
                soal = <Soal20166/>;
                pilihan = <Pilihan20166 showJawaban={showJawaban}/>
                jawaban = <Jawaban20166/>
                penjelasan = <Penjelasan20166/>
                break;
            case 7:
                soal = <Soal20167/>;
                pilihan = <Pilihan20167 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20167/>
                penjelasan = <Penjelasan20167/>
                break;
            case 8:
                soal = <Soal20168/>;
                pilihan = <Pilihan20168 showJawaban={showJawaban}/>
                jawaban = <Jawaban20168/>
                penjelasan = <Penjelasan20168/>
                break;
            case 9:
                soal = <Soal20169/>;
                pilihan = <Pilihan20169 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20169/>
                penjelasan = <Penjelasan20169/>
                break;
            case 10:
                soal = <Soal201610/>;
                pilihan = <Pilihan201610 showJawaban={showJawaban}/>
                jawaban = <Jawaban201610/>
                penjelasan = <Penjelasan201610/>
                break;
            case 11:
                soal = <Soal201611/>;
                pilihan = <Pilihan201611 showJawaban={showJawaban}/>;
                jawaban = <Jawaban201611/>
                penjelasan = <Penjelasan201611/>
                break;
            case 12:
                soal = <Soal201612/>;
                pilihan = <Pilihan201612 showJawaban={showJawaban}/>
                jawaban = <Jawaban201612/>
                penjelasan = <Penjelasan201612/>
                break;
            default:
                soal = <Soal20161/>;
                pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20161/>
                penjelasan = <Penjelasan20161/>
                break;
        }
    }
    else if(tahunId=='2017'){
        switch(nomor){
            case 1:
                soal = <Soal20171/>;
                pilihan = <Pilihan20171 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20171/>
                penjelasan = <Penjelasan20171/>
                break;
            case 2:
                soal = <Soal20172/>;
                pilihan = <Pilihan20172 showJawaban={showJawaban}/>
                jawaban = <Jawaban20172/>
                penjelasan = <Penjelasan20172/>
                break;
            case 3:
                soal = <Soal20173/>;
                pilihan = <Pilihan20173 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20173/>
                penjelasan = <Penjelasan20173/>
                break;
            case 4:
                soal = <Soal20174/>;
                pilihan = <Pilihan20174 showJawaban={showJawaban}/>
                jawaban = <Jawaban20174/>
                penjelasan = <Penjelasan20174/>
                break;
            case 5:
                soal = <Soal20175/>;
                pilihan = <Pilihan20175 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20175/>
                penjelasan = <Penjelasan20175/>
                break;
            case 6:
                soal = <Soal20176/>;
                pilihan = <Pilihan20176 showJawaban={showJawaban}/>
                jawaban = <Jawaban20176/>
                penjelasan = <Penjelasan20176/>
                break;
            case 7:
                soal = <Soal20177/>;
                pilihan = <Pilihan20177 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20177/>
                penjelasan = <Penjelasan20177/>
                break;
            case 8:
                soal = <Soal20178/>;
                pilihan = <Pilihan20178 showJawaban={showJawaban}/>
                jawaban = <Jawaban20178/>
                penjelasan = <Penjelasan20178/>
                break;
            case 9:
                soal = <Soal20179/>;
                pilihan = <Pilihan20179 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20179/>
                penjelasan = <Penjelasan20179/>
                break;
            case 10:
                soal = <Soal201710/>;
                pilihan = <Pilihan201710 showJawaban={showJawaban}/>
                jawaban = <Jawaban201710/>
                penjelasan = <Penjelasan201710/>
                break;
            case 11:
                soal = <Soal201711/>;
                pilihan = <Pilihan201711 showJawaban={showJawaban}/>;
                jawaban = <Jawaban201711/>
                penjelasan = <Penjelasan201711/>
                break;
            case 12:
                soal = <Soal201712/>;
                pilihan = <Pilihan201712 showJawaban={showJawaban}/>
                jawaban = <Jawaban201712/>
                penjelasan = <Penjelasan201712/>
                break;
            default:
                soal = <Soal20171/>;
                pilihan = <Pilihan20171 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20171/>
                penjelasan = <Penjelasan20171/>
                break;
        }
    }

    React.useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', function(){
            Alert.alert(
                'Keluar?',
                'Apakah kamu yakin ingin keluar dari soal ini?',
                [
                    {
                        text: 'Tidak',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'Iya', onPress: () => {
                        navigation.navigate('Home'),
                        currentTime=180,
                        quiz.stop(),
                        backgroundSong.play()
                    }},
                ],
                {cancelable: false},
            );
            return true;
        });
    });
    checkTime(time);

    if(salah){
        dijawab = 0
        checkTime(1);
    }
    
    return(
        <>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../assets/picture/backgrounds/primary.png')}>
                    <CountDown style={styles.waktu}
                        until={currentTime}
                        onChange = {()=>{
                            dumpTime = dumpTime-1
                            if(dumpTime==1){
                                showJawaban(0)
                            }
                        }}
                        size={15}
                        onFinish={()=> {
                            dijawab==1?null:wrong.play();
                            dijawab==1?null:quiz.stop();
                            dijawab==1?null:currentTime = 20;
                            dijawab==1?null:showJawaban(0);
                        }}
                        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFBD33'}}
                        digitTxtStyle={{color: '#F0B50B'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: null, s: null}}
                        separatorStyle={{color: '#F0B50B'}}
                        showSeparator
                    />
                    <View style={styles.soalContainer}>
                        {soal}  
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.toBtn}
                    onPress={() => navigation.navigate('IsiSoal',{
                        number: nomor,
                        awal: 1,
                        time: dumpTime,
                        pertama: false,
                    })}>
                    <Image
                        style={styles.btnback}
                        source={require('../assets/picture/tantangan/ButtonSoal.png')}/>
                </TouchableOpacity>
                <ScrollView>
                    {pilihan}
                </ScrollView>
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
                        
                        
                        <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={()=> ubah(status=>!status) }>
                                <Image 
                                    source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
                            </TouchableOpacity>
                        {temp==1?<GambarBenar/>:<GambarSalah/>}
                        </View>
                        {HidePenjelasan(status,penjelasan)}
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
        justifyContent:'center',
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
        alignContent: 'center'
    },
    nilai: {
        width: 50,
        height: 50,
        marginTop: 70,
        marginLeft: -50
    },
    btnNext: {
        alignSelf: 'flex-end'
    },
    soalContainer: {
        width: '100%',
        height: '50%'
    },
    txNext: {
        fontFamily: 'KiriFont',
        fontSize: 15,
        textAlign: 'center'
    },
    txPenjelasan:{
        color : '#6ac1bd',
        fontWeight: 'bold',
        fontSize: 25,
        includeFontPadding: true,
        padding: 15,
        alignSelf: 'center'
    },
    txIsiPenjelasan:{
        color : '#6ac1bd',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
    papan:{
        resizeMode:'stretch',
        width: 300,
        height: 200,
        marginLeft: -10
    },
    toBtn:{
        alignSelf: 'flex-end'
    }
})

export default TantanganSoal;