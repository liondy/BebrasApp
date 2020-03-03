import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';
import Penjelasan20161 from '../assets/soal/2016/1/Penjelasan';

function PenjelasanScreen({route,navigation}){
    const {tahunId} = route.params;
    const {nomor} = route.params;
    const {nilai} = route.params;
    var contentPenjelasan;
    if(tahunId=='2016'){
        switch(nomor){
            case 1:
                contentPenjelasan = <Penjelasan20161/>;
                break;
            default:
                contentPenjelasan = <Penjelasan20161/>;
                break;
        }
    }
    return(
        <View style={styles.cont}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/picture/backgrounds/combined.png')}>
                <Text style={styles.txPenjelasan}>Penjelasan</Text>
                {contentPenjelasan}

            <TouchableOpacity
                onPress={()=> navigation.navigate('IsiSoal',{
                    tahunId: tahunId,
                    nilai: nilai,
                    awal: 2,
                    pertama: true
                })}>
                <Image style={styles.btnNext}
                    source={require('../assets/picture/hasilJawaban/next.png')}/>
            </TouchableOpacity>

            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%'
    },
    txPenjelasan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
    gambar:{

    },
    btnNext:{
        marginTop: 200,
        alignSelf: 'flex-end'
    }
})

export default PenjelasanScreen;