import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    BackHandler,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Modal from 'react-native-modal';
//2016
import Soal20161 from '../assets/soal/2016/1/Soal';
import Pilihan20161 from '../assets/soal/2016/1/Pilihan';
import Jawaban20161 from '../assets/soal/2016/1/Jawaban';

import Soal20162 from '../assets/soal/2016/2/Soal';
import Pilihan20162 from '../assets/soal/2016/2/Pilihan';
import Jawaban20162 from '../assets/soal/2016/2/Jawaban';

import Soal20163 from '../assets/soal/2016/3/Soal';
import Pilihan20163 from '../assets/soal/2016/3/Pilihan';
import Jawaban20163 from '../assets/soal/2016/3/Jawaban';

import Soal20164 from '../assets/soal/2016/4/Soal';
import Pilihan20164 from '../assets/soal/2016/4/Pilihan';
import Jawaban20164 from '../assets/soal/2016/4/Jawaban';

import Soal20165 from '../assets/soal/2016/5/Soal';
import Pilihan20165 from '../assets/soal/2016/5/Pilihan';
import Jawaban20165 from '../assets/soal/2016/5/Jawaban';

import Soal20166 from '../assets/soal/2016/6/Soal';
import Pilihan20166 from '../assets/soal/2016/6/Pilihan';
import Jawaban20166 from '../assets/soal/2016/6/Jawaban';

import Soal20167 from '../assets/soal/2016/7/Soal';
import Pilihan20167 from '../assets/soal/2016/7/Pilihan';
import Jawaban20167 from '../assets/soal/2016/7/Jawaban';

import Soal20168 from '../assets/soal/2016/8/Soal';
import Pilihan20168 from '../assets/soal/2016/8/Pilihan';
import Jawaban20168 from '../assets/soal/2016/8/Jawaban';

import Soal20169 from '../assets/soal/2016/9/Soal';
import Pilihan20169 from '../assets/soal/2016/9/Pilihan';
import Jawaban20169 from '../assets/soal/2016/9/Jawaban';

import Soal201610 from '../assets/soal/2016/10/Soal';
import Pilihan201610 from '../assets/soal/2016/10/Pilihan';
import Jawaban201610 from '../assets/soal/2016/10/Jawaban';

import Soal201611 from '../assets/soal/2016/11/Soal';
import Pilihan201611 from '../assets/soal/2016/11/Pilihan';
import Jawaban201611 from '../assets/soal/2016/11/Jawaban';

import Soal201612 from '../assets/soal/2016/12/Soal';
import Pilihan201612 from '../assets/soal/2016/12/Pilihan';
import Jawaban201612 from '../assets/soal/2016/12/Jawaban';

//2017
import Soal20171 from '../assets/soal/2017/1/Soal';
import Pilihan20171 from '../assets/soal/2017/1/Pilihan';
import Jawaban20171 from '../assets/soal/2017/1/Jawaban';

import Soal20172 from '../assets/soal/2017/2/Soal';
import Pilihan20172 from '../assets/soal/2017/2/Pilihan';
import Jawaban20172 from '../assets/soal/2017/2/Jawaban';

import Soal20173 from '../assets/soal/2017/3/Soal';
import Pilihan20173 from '../assets/soal/2017/3/Pilihan';
import Jawaban20173 from '../assets/soal/2017/3/Jawaban';

import Soal20174 from '../assets/soal/2017/4/Soal';
import Pilihan20174 from '../assets/soal/2017/4/Pilihan';
import Jawaban20174 from '../assets/soal/2017/4/Jawaban';

import Soal20175 from '../assets/soal/2017/5/Soal';
import Pilihan20175 from '../assets/soal/2017/5/Pilihan';
import Jawaban20175 from '../assets/soal/2017/5/Jawaban';

import Soal20176 from '../assets/soal/2017/6/Soal';
import Pilihan20176 from '../assets/soal/2017/6/Pilihan';
import Jawaban20176 from '../assets/soal/2017/6/Jawaban';

import Soal20177 from '../assets/soal/2017/7/Soal';
import Pilihan20177 from '../assets/soal/2017/7/Pilihan';
import Jawaban20177 from '../assets/soal/2017/7/Jawaban';

import Soal20178 from '../assets/soal/2017/8/Soal';
import Pilihan20178 from '../assets/soal/2017/8/Pilihan';
import Jawaban20178 from '../assets/soal/2017/8/Jawaban';

import Soal20179 from '../assets/soal/2017/9/Soal';
import Pilihan20179 from '../assets/soal/2017/9/Pilihan';
import Jawaban20179 from '../assets/soal/2017/9/Jawaban';

import Soal201710 from '../assets/soal/2017/10/Soal';
import Pilihan201710 from '../assets/soal/2017/10/Pilihan';
import Jawaban201710 from '../assets/soal/2017/10/Jawaban';

import Soal201711 from '../assets/soal/2017/11/Soal';
import Pilihan201711 from '../assets/soal/2017/11/Pilihan';
import Jawaban201711 from '../assets/soal/2017/11/Jawaban';

import Soal201712 from '../assets/soal/2017/12/Soal';
import Pilihan201712 from '../assets/soal/2017/12/Pilihan';
import Jawaban201712 from '../assets/soal/2017/12/Jawaban';
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

function Penjelasan(){
    return(
        <ScrollView>
            <Text style={styles.txIsiPenjelasan}>
            Kamu dapat menggambar suatu diagram dengan kota digambarkan sebagai 
            titik dan jalur bus sebagai garis yang tidak berpotongan, seperti 
            ditunjukkan dalam gambar berikut ini. Dalam gambar terlihat jelas 
            bahwa tidakmungkin mencapai Kotalima dari Kotatiga.

            Kamu dapat menggambar suatu diagram dengan kota digambarkan sebagai 
            titik dan jalur bus sebagai garis yang tidak berpotongan, seperti 
            ditunjukkan dalam gambar berikut ini. Dalam gambar terlihat jelas 
            bahwa tidakmungkin mencapai Kotalima dari Kotatiga.

            Kamu dapat menggambar suatu diagram dengan kota digambarkan sebagai 
            titik dan jalur bus sebagai garis yang tidak berpotongan, seperti 
            ditunjukkan dalam gambar berikut ini. Dalam gambar terlihat jelas 
            bahwa tidakmungkin mencapai Kotalima dari Kotatiga.
        </Text>
        </ScrollView>
    )
}

function HidePenjelasan(status){
    if(status){
        return(
            <View>
                <Text style={styles.txPenjelasan}>Penjelasan</Text>
                <Penjelasan/>
            </View>
        )
    }
    else{
        <View></View>
    }
}

var temp=0;


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
    console.log('tahun: '+tahunId);
    console.log('nmor: '+nomor);

    const showJawaban = (x) => {
        temp = x;
        toggle(currentIsOpen => !currentIsOpen);
    }

    var soal;
    var pilihan;
    var jawaban;
    const[isBenar,cek]=React.useState(false);
    const [status,ubah]=React.useState(false);

    if(tahunId=='2016'){
        switch(nomor){
            case 1:
                soal = <Soal20161/>;
                pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20161/>
                break;
            case 2:
                soal = <Soal20162/>;
                pilihan = <Pilihan20162 showJawaban={showJawaban}/>
                jawaban = <Jawaban20162/>
            case 3:
                soal = <Soal20163/>;
                pilihan = <Pilihan20163 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20163/>
                break;
            case 4:
                soal = <Soal20164/>;
                pilihan = <Pilihan20164 showJawaban={showJawaban}/>
                jawaban = <Jawaban20164/>
            case 5:
                soal = <Soal20165/>;
                pilihan = <Pilihan20165 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20165/>
                break;
            case 6:
                soal = <Soal20166/>;
                pilihan = <Pilihan20166 showJawaban={showJawaban}/>
                jawaban = <Jawaban20166/>
            case 7:
                soal = <Soal20167/>;
                pilihan = <Pilihan20167 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20167/>
                break;
            case 8:
                soal = <Soal20168/>;
                pilihan = <Pilihan20168 showJawaban={showJawaban}/>
                jawaban = <Jawaban20168/>   
            case 9:
                soal = <Soal20169/>;
                pilihan = <Pilihan20169 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20169/>
                break;
            case 10:
                soal = <Soal201610/>;
                pilihan = <Pilihan201610 showJawaban={showJawaban}/>
                jawaban = <Jawaban201610/>
            case 11:
                soal = <Soal201611/>;
                pilihan = <Pilihan201611 showJawaban={showJawaban}/>;
                jawaban = <Jawaban201611/>
                break;
            case 12:
                soal = <Soal201612/>;
                pilihan = <Pilihan201612 showJawaban={showJawaban}/>
                jawaban = <Jawaban201612/>      
            default:
                soal = <Soal20161/>;
                pilihan = <Pilihan20161 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20161/>
                break;
        }
    }
    else if(tahunId=='2017'){
        switch(nomor){
            case 1:
                soal = <Soal20171/>;
                pilihan = <Pilihan20171 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20171/>
                break;
            case 2:
                soal = <Soal20172/>;
                pilihan = <Pilihan20172 showJawaban={showJawaban}/>
                jawaban = <Jawaban20172/>
            case 3:
                soal = <Soal20173/>;
                pilihan = <Pilihan20173 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20173/>
                break;
            case 4:
                soal = <Soal20174/>;
                pilihan = <Pilihan20174 showJawaban={showJawaban}/>
                jawaban = <Jawaban20174/>
            case 5:
                soal = <Soal20175/>;
                pilihan = <Pilihan20175 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20175/>
                break;
            case 6:
                soal = <Soal20176/>;
                pilihan = <Pilihan20176 showJawaban={showJawaban}/>
                jawaban = <Jawaban20176/>
            case 7:
                soal = <Soal20177/>;
                pilihan = <Pilihan20177 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20177/>
                break;
            case 8:
                soal = <Soal20178/>;
                pilihan = <Pilihan20178 showJawaban={showJawaban}/>
                jawaban = <Jawaban20178/>   
            case 9:
                soal = <Soal20179/>;
                pilihan = <Pilihan20179 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20179/>
                break;
            case 10:
                soal = <Soal201710/>;
                pilihan = <Pilihan201710 showJawaban={showJawaban}/>
                jawaban = <Jawaban201710/>
            case 11:
                soal = <Soal201711/>;
                pilihan = <Pilihan201711 showJawaban={showJawaban}/>;
                jawaban = <Jawaban201711/>
                break;
            case 12:
                soal = <Soal201712/>;
                pilihan = <Pilihan201712 showJawaban={showJawaban}/>
                jawaban = <Jawaban201712/>      
            default:
                soal = <Soal20171/>;
                pilihan = <Pilihan20171 showJawaban={showJawaban}/>;
                jawaban = <Jawaban20171/>
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
                        <View style={styles.soalContainer}>
                            {soal}  
                        </View>
                        
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
                        <View style={{paddingLeft: 20,paddingRight: 10}}>
                            <Text style={styles.jawaban}>Jawaban : </Text>
                            <Text style={styles.penjelasan}>Jawaban yang benar adalah Kotalima!</Text>
                        </View>
                        
                        
                        <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={()=> ubah(status=>!status) }>
                                <Image
                                    source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
                            </TouchableOpacity>
                        <Gambar/> 
                        </View>
                        {HidePenjelasan(status)}
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
        lineHeight: 40,
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
})

export default TantanganSoal;