import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    BackHandler,
    Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
import Des20161 from '../assets/soal/2016/1/DeskripsiSoal';
import { wrong } from '../pages/TantanganSoal';

function ImgSoal(){
    return(
        <Image style={styles.soal}
        source={require('../assets/picture/soal/imgsoal.png')}/>
    )
}

let availableSoal = []; //list of available numbers
let answered = 0; //how many the user has answered
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
                    {text: 'Iya', onPress: () => navigation.navigate('Home')},
                ],
                {cancelable: false},
            );
            return true;
        });
    });
    const isAwal = (awal) => {
        if(awal=='0'){
            for (let index = 0; index < 24; index++) {
                availableSoal.pop(); //removing cache, make availableSoal to []
            }
            for (let index = 0; index < 24; index++) {
                availableSoal.push(true); //make all numbers available again
            }
            currentNilai = 0;
            answered = 0; //start a new game
            return true; //means you can start the game
        }
        else if(awal==1){
            currentNumber = {number};
            return false;
        }
        else {
            if(answered==3){
                navigation.navigate('SelesaiSoal',{
                    tahunId: tahunId,
                    nilai: currentNilai
                })
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
            nomor = Math.floor(Math.random() * 24)+1; //random number 1-24
            console.log('nomor soal: '+nomor);
        }
        while(availableSoal[nomor] = false && nomor == 0);
        availableSoal[nomor] = false; //the available number from the number that has been generated sets to false
        answered++; //increment the answered question
        console.log('Soal ke: '+answered);
        return nomor; //gets the new number of soal
    };
    if(isAwal(awal)){
        currentNumber = randomNomorSoal();
    }
    if(tahunId=='2016'){
        switch(currentNumber){
            case 1:
                path = <Des20161/>;
                break;
            default:
                path = <Des20161/>;
                break;
        }
    }
    else if(tahun=='2017'){
        switch(currentNumber){
            case 1:
                path = <Des20171/>;
                break;
            default:
                path = <Des20161/>;
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
                source={require('../assets/picture/backgrounds/combined.png')}
                style={styles.background}>
                {pertama?null:<CountDown style={styles.waktu}
                    until={time}
                    onChange = {()=>{
                        currentTime = currentTime-1
                    }}
                    size={15}
                    onFinish={()=> {
                        pertama?null:wrong.play()
                        currentTime = 0
                    }}
                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFBD33'}}
                    digitTxtStyle={{color: '#F0B50B'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: null, s: null}}
                    separatorStyle={{color: '#F0B50B'}}
                    showSeparator
                />}
                <ImgSoal/>
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
        alignSelf: 'flex-end'
    },
    soal:{
        marginLeft: 50,
        marginTop: 10
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
    soalContainer: {
        width: '100%',
        height: '80%',
    },
    waktu:{
        marginTop: 10
    }
})

export default IsiSoal;