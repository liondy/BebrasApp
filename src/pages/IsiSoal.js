import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Des20161 from '../assets/soal/2016/1/DeskripsiSoal';

function ImgSoal(){
    return(
        <Image style={styles.soal}
        source={require('../assets/picture/soal/imgsoal.png')}/>
    )
}

let availableSoal = []; //list of available numbers
let answered = 0; //how many the user has answered
let currentNumber = 0; //give the function the current number
let path = <Des20161/>
function IsiSoal({route,navigation}){
    const { tahunId } = route.params;
    const { awal } = route.params; //checked if it is the beginnning or the middle of the soal
    React.useEffect(()=>{
        if(isAwal({awal})){
            currentNumber = randomNomorSoal();
            console.log('current number: '+currentNumber);
            if(tahunId=='2016'){
                switch(currentNumber){
                    case 1:
                        path = <Des20161/>;
                        break;
                    default:
                        break;
                }
            }
            else if(tahunId=='2017'){
                switch(currentNumber){
                    case 1:
                        path = <Des20171/>;
                        break;
                    default:
                        break;
                }
            }
            else if(tahunId=='2018'){
                switch(currentNumber){
                    case 1:
                        path = <Des20181/>;
                        break;
                    default:
                        break;
                }
            }
            else if(tahunId=='2019'){
                switch(currentNumber){
                    case 1:
                        path = <Des20191/>;
                        break;
                    default:
                        break;
                }
            }
        }
        else{
            navigation.navigate('Home');
        }
    });
    const isAwal = (awal) => {
        if(awal){
            for (let index = 0; index < 24; index++) {
                availableSoal.pop(); //removing cache, make availableSoal to []
            }
            for (let index = 0; index < 24; index++) {
                availableSoal.push(true); //make all numbers available again
            }
            answered = 0; //start a new game
            return true; //means you can start the game
        }
        else {
            if(answered==12){
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
        return nomor; //gets the new number of soal
    };
    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
                <ImgSoal/>
                <View style={styles.soalContainer}>
                    {path}
                </View>
                <View style={styles.tantangan}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TantanganSoal',{
                            tahunId: {tahunId},
                            nomor: {currentNumber},
                            jumlahSoal: {answered}
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
        marginTop: 5
    }
})

export default IsiSoal;