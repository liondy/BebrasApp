import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import useNavigation from '@react-navigation/native';

function TahunSoal({tahun}){
    if (tahun=='2016'){
        return(
            <Image 
            style={styles.tahun}
            source={require('../assets/picture/startingSoal/2016.png')}
            />
        )
    }
    else if (tahun=='2017'){
        return(
            <Image
            style={styles.tahun}
            source={require('../assets/picture/startingSoal/2017.png')}
            />
        )
    }        
    else if (tahun=='2018'){
        return(
            <Image
            style={styles.tahun}
            source={require('../assets/picture/startingSoal/2018.png')}
            />
        )
    }    
    else if (tahun=='2019'){
        return(
            <Image
            style={styles.tahun}
            source={require('../assets/picture/startingSoal/2019.png')}
            />
        )
    }
}

function TotalSoal(){
    return(
        <Image
            style={styles.totalSoal}
            source={require('../assets/picture/startingSoal/totalSoal.png')}
        />
    )
}

function Waktu(){
    return(
        <Image
            style={styles.waktu} 
            source={require('../assets/picture/startingSoal/waktu.png')}
        />
    )
}

function Karakter(){
    return(
        <Image style={styles.karakter}
            source={require('../assets/picture/startingSoal/karakterStart.gif')}
        />
    )
}

function GoImg(){
    return(
        <Image style={styles.go}
            source={require('../assets/picture/startingSoal/go.png')}
        />
    )
}

function HiasanBawah(){
    return(
        <Image 
            style={styles.cacing}
            source={require('../assets/picture/startingSoal/hiasan.png')}
        />
    )
}

function StartingSoal({route, navigation}){
    const { tahunId } = route.params;
    return(
        <>
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
                    <View style={styles.tahunSoalCont}>
                        <TahunSoal tahun={tahunId}/>
                    </View>
                    <View style={styles.totalSoalCont}>
                        <TotalSoal/>
                    </View>
                    <View style={styles.waktuCont}>
                        <Waktu/>
                    </View>
                    <View>
                        <GoImg/>
                    </View>
                    <View style={styles.karakterContainer}>
                        <Karakter/>
                    </View>
                    
                    <View style={styles.cacingCont}>
                        <HiasanBawah/>
                    </View>  
            </ImageBackground>
        </View>

        <View style={styles.btnSoal}>
            <TouchableOpacity onPress={()=> navigation.navigate('IsiSoal')}>
                <Image source={require('../assets/picture/startingSoal/start.png')}/>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background:{
        width:'100%',
        height:'100%'
    },
    tahunSoalCont:{
            alignContent: 'center',
            justifyContent: 'center'
    },
    tahun: {
        alignSelf: 'center',
        marginLeft: 100
    },
    totalSoalCont:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    totalSoal: {
        alignSelf: 'center',
        marginLeft: 25,
        paddingBottom: 10
    },
    waktuCont:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    waktu: {
        alignSelf: 'center',
        marginTop: 15,
        marginLeft: 10
    },
    karakterContainer: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    karakter:{
        marginTop: -30,
        width: 230,
        height: 220,
        alignSelf: 'center'
    },
    cacingCont:{
        alignContent: 'flex-end',
        justifyContent: 'flex-end'
    },
    cacing: {
        alignSelf: 'baseline',
        marginLeft: -50,
    },
    btnSoal:{
        alignItems: 'flex-end'
    },
});

export default StartingSoal;