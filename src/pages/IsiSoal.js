import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    BackHandler,
    Alert,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
//2016
import Des20161 from '../assets/soal/2016/1/DeskripsiSoal';
import Des20162 from '../assets/soal/2016/2/DeskripsiSoal';
import Des20163 from '../assets/soal/2016/3/DeskripsiSoal';
import Des20164 from '../assets/soal/2016/4/DeskripsiSoal';
import Des20165 from '../assets/soal/2016/5/DeskripsiSoal';
import Des20166 from '../assets/soal/2016/6/DeskripsiSoal';
import Des20167 from '../assets/soal/2016/7/DeskripsiSoal';
import Des20168 from '../assets/soal/2016/8/DeskripsiSoal';
import Des20169 from '../assets/soal/2016/9/DeskripsiSoal';
import Des201610 from '../assets/soal/2016/10/DeskripsiSoal';
import Des201611 from '../assets/soal/2016/11/DeskripsiSoal';
import Des201612 from '../assets/soal/2016/12/DeskripsiSoal';

//2017
import Des20171 from '../assets/soal/2017/1/DeskripsiSoal';
import Des20172 from '../assets/soal/2017/2/DeskripsiSoal';
import Des20173 from '../assets/soal/2017/3/DeskripsiSoal';
import Des20174 from '../assets/soal/2017/4/DeskripsiSoal';
import Des20175 from '../assets/soal/2017/5/DeskripsiSoal';
import Des20176 from '../assets/soal/2017/6/DeskripsiSoal';
import Des20177 from '../assets/soal/2017/7/DeskripsiSoal';
import Des20178 from '../assets/soal/2017/8/DeskripsiSoal';
import Des20179 from '../assets/soal/2017/9/DeskripsiSoal';
import Des201710 from '../assets/soal/2017/10/DeskripsiSoal';
import Des201711 from '../assets/soal/2017/11/DeskripsiSoal';
import Des201712 from '../assets/soal/2017/12/DeskripsiSoal';

import { wrong, quiz, backgroundSong } from '../../App';
import { finish } from '../../App';

function ImgSoal({nomor}){
    return(
        <View style={styles.cnt}>
            <Image style={styles.soal}
            source={require('../assets/picture/soal/stikerSoal.png')}/>
            <Text style={styles.nomorSoal}>{nomor}</Text>
        </View>
    )
}

let availableSoal = []; //list of available numbers
let answered = 1; //how many the user has answered
let currentNumber = 0; //give the function the current number
var currentTime = 0;
var currentNilai = 0;

function IsiSoal({route,navigation}){
    const { tahunId } = route.params;
    const { awal } = route.params; //checked if it is the beginnning or the middle of the soal
    const { number } = route.params;
    const { pertama } = route.params;
    const { time } = route.params;
    const { nilai } = route.params;

    currentNilai = nilai;
    console.log('total nilai: '+currentNilai);
    console.log('nomor: '+number);
    console.log("ans: "+answered);

    var path;
    if(!pertama){
        currentTime = time;
    }
    else{
        currentTime = 0;
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
    const isAwal = (awal) => {
        if(awal=='0'){
            console.log("masuk sini");
            for (let index = 0; index <= 12; index++) {
                availableSoal.pop(); //removing cache, make availableSoal to []
            }
            for (let index = 0; index <= 12; index++) {
                availableSoal.push(true); //make all numbers available again
            }
            currentNilai = 0;
            answered = 0; //start a new game
            return true; //means you can start the game
        }
        else if(awal==1){
            currentNumber = number;
            return false;
        }
        else {
            if(answered==12){
                navigation.navigate('SelesaiSoal',{
                    tahunId: tahunId,
                    nilai: currentNilai
                });
                quiz.stop();
                finish.play();
                return false; //means you has to stop the game because you already have all 12 questions
            }
            else{
                return true; //means you still can have the game until 12 question
            }
        }
    }
    const randomNomorSoal = () => {
        let nomor;
        do{
            nomor = Math.floor(Math.random() * 12)+1; //random number 1-24
        }
        while(!availableSoal[nomor] || nomor == 0);
        availableSoal[nomor] = false; //the available number from the number that has been generated sets to false
        answered++; //increment the answered question
        // console.log('Soal ke: '+answered);
        console.log('nomor soal: '+nomor);
        return nomor; //gets the new number of soal
    };
    if(isAwal(awal)){
        currentNumber = randomNomorSoal();
        // currentNumber++;
    }
    if(tahunId=='2016'){
        switch(currentNumber){
            case 1:
                path = <Des20161/>;
                break;
            case 2:
                path = <Des20162/>;
                break;
            case 3:
                path = <Des20163/>;
                break;
            case 4:
                path = <Des20164/>;
                break;
            case 5:
                path = <Des20165/>;
                break;
            case 6:
                path = <Des20166/>;
                break;
            case 7:
                path = <Des20167/>;
                break;
            case 8:
                path = <Des20168/>;
                break; 
            case 9:
                path = <Des20169/>;
                break;
            case 10:
                path = <Des201610/>;
                break;
            case 11:
                path = <Des201611/>;
                break;
            case 12:
                path = <Des201612/>;
                break;       
            default:
                path = <Des20161/>;
                break;
        }
    }
    else if(tahunId=='2017'){
        switch(currentNumber){
            case 1:
                path = <Des20171/>;
                break;
            case 2:
                path = <Des20172/>;
                break;
            case 3:
                path = <Des20173/>;
                break;
            case 4:
                path = <Des20174/>;
                break;
            case 5:
                path = <Des20175/>;
                break;
            case 6:
                path = <Des20176/>;
                break;
            case 7:
                path = <Des20177/>;
                break;
            case 8:
                path = <Des20178/>;
                break; 
            case 9:
                path = <Des20179/>;
                break;
            case 10:
                path = <Des201710/>;
                break;
            case 11:
                path = <Des201711/>;
                break;
            case 12:
                path = <Des201712/>;
                break;       
            default:
                path = <Des20171/>;
                break;
        }
    }
    else if(tahun=='2018'){
        switch(currentNumber){
            case 1:
                path = <Des20181/>;
                break;
            default:
                path = <Des20161/>;
                break;
        }
    }
    else if(tahun=='2019'){
        switch(currentNumber){
            case 1:
                path = <Des20191/>;
                break;
            default:
                path = <Des20161/>;
                break;
        }
    }
    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
                {pertama?null:<CountDown style={styles.waktu}
                    until={time}
                    onChange = {()=>{
                        currentTime = currentTime-1
                    }}
                    size={15}
                    onFinish={()=> {
                        pertama?null:wrong.play(),
                        currentTime = 0,
                        quiz.stop(),
                        navigation.navigate('TantanganSoal',{
                            tahunId: tahunId,
                            nomor: currentNumber,
                            jumlahSoal: answered,
                            time: 0,
                            nilai: currentNilai,
                            salah: true
                        })
                    }}
                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFBD33'}}
                    digitTxtStyle={{color: '#F0B50B'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}
                    separatorStyle={{color: '#F0B50B'}}
                    showSeparator
                />}
                <ImgSoal nomor={answered}/>
                <View style={styles.soalContainer}>
                    {path}
                </View>
                <View style={styles.tantangan}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TantanganSoal',{
                            tahunId: tahunId,
                            nomor: currentNumber,
                            jumlahSoal: answered,
                            time: currentTime,
                            nilai: currentNilai,
                        })
                    }>
                        <Image source={require('../assets/picture/soal/btntantangan.png')}/>  
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
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
    bgSoal:{
        width: '100%',
        height: '100%'
    },
    tantangan:{
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom:0
    },
    soal:{
        // marginLeft: 50,
        marginTop: 10,
        alignSelf: 'center',
        resizeMode: 'stretch',
        width: 150,
        height: 80
    },
    textSoal:{
        color : '#FF5733',
        // color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 45,
        includeFontPadding: true,
        padding: 15
    },
    soalContainer: {
        width: '100%',
        height: '75%'
    },
    nomorSoal: {
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 50,
        includeFontPadding: true,
        marginLeft: 10,
        marginTop: 15,
        marginRight: 10
    },
    cnt: {
        flexDirection: 'row-reverse',
        justifyContent: 'center'
    }
})

export default IsiSoal;