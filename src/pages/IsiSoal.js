import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
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

function DeskripsiSoal(){
    return(
        <ScrollView>
            <Text style={styles.textSoal} numberOflines={10}>
                Bebras Joni ingin melakukan perjalanan untuk mengunjungi 5 kota di negaranya:
                Kotasatu, Kotadua, Kotatiga, Kotaempat, Kotalima, Kotaenam. Kota-kota tersebut
                dihubungkan dengan jalur bus. Rute bus yang tersedia (dalam dua arah) adalah
                sebagai berikut:{"\n"}
                    <Text> 
                    1. Kotatiga - Kotasatu{"\n"}
                    2. Kotasatu - Kotadua{"\n"}
                    3. Kotaenam - Kotatiga{"\n"}
                    4. Kotalima - Kotaempat{"\n"}
                    </Text>
            </Text>
        </ScrollView> 
    )
}

function IsiSoal({navigation}){
    return(
        <>
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
        // color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 45,
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