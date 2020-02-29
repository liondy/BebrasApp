import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function ImgSoal(){
    return(
        <Image style={styles.soal}
        source={require('../assets/picture/soal/imgsoal.png')}/>
    )
}

function BtnTantangan(){
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('TantanganSoal')}>
            <Image source={require('../assets/picture/soal/btntantangan.png')}/>    
        </TouchableOpacity>
    )
}

let availableSoal = []; //list of available numbers
let answered = 0; //how many the user has answered
let currentNumber = 0; //give the function the current number
function IsiSoal({route,navigation}){
    const { tahunId } = route.params;
    const { awal } = route.params; //checked if it is the beginnning or the middle of the soal
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
        do{
            let nomor = Math.floor(Math.random() * 24)+1; //random number 1-24
            console.log('nomor soal: '+nomor);
        }
        while(availableSoal[nomor] = false);
        availableSoal[nomor] = false; //the available number from the number that has been generated sets to false
        answered++; //increment the answered question
        return nomor; //gets the new number of soal
    };
    componentDidMount(){
        if(isAwal({awal})){
            currentNumber = randomNomorSoal();
            import DeskripsiSoal from "'../assets/soal/"+{tahunId}+"/"+currentNumber+"'";
        }
    }
    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
                <ImgSoal/>
                <View style={styles.soalContainer}>
                    <DeskripsiSoal/>
                </View>
                <View style={styles.tantangan}>
                    <BtnTantangan/>
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