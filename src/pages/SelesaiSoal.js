import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    ScrollView
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { backgroundSong} from '../../App';

function Selamat(){
    return(
        <View style={styles.txAtasCont}>
            <Image
                source={require('../assets/picture/selesaiSoal/selamat.png')}
                style={styles.txSelamat}/>    
            <Image
                source={require('../assets/picture/selesaiSoal/menyelesaikan.png')}
                style={styles.txMenyelesaikan}/>
        </View>
    )
}

function Karakter(){
    return(
        <Image
        source={require('../assets/picture/selesaiSoal/gifBebras.gif')}
        style={styles.gifBebras}>
        </Image>
    )
}

function Diamond({reward}){
    return(
        <View style={styles.diamondCont}>
            <Image 
            style={styles.diamond}
            source={require('../assets/picture/selesaiSoal/diamond.png')}/>
                <Text style={styles.txdiamond}>+{reward}</Text>
        </View>
        
    )
}

function SelesaiSoal({route,navigation}){
    const { nilai } = route.params;
    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/picture/backgrounds/primary.png')}>
                <Selamat/>
                <Karakter/>
                <Diamond reward={nilai}/>
                <TouchableOpacity
                    style={styles.btnBackBeranda}
                    onPress={()=> {navigation.navigate('Home',{
                        nilai: nilai
                    }),
                        backgroundSong.play();
                    }}>
                        <Image
                        style={styles.btnBack} 
                        source={require('../assets/picture/selesaiSoal/backBeranda.png')}/>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignContent:'center',
        justifyContent: 'center',
        flex: 1
    },
    background:{
        width: '100%',
        height: '100%',
    },
    txAtasCont:{
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    txSelamat:{
        marginTop: -30,
        marginBottom: -55
    },
    txMenyelesaikan: {
        alignSelf: 'center',
        marginTop: -30
    },
    diamondCont:{
        flexDirection: "row",
        alignContent: 'center',
        justifyContent: 'center'
    },
    diamond: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    txdiamond: {
        fontSize: 30,
        color: "#FF5733",
        marginTop: 10
    },
    gifBebras:{
        marginTop: -40,
        alignSelf: 'center',
        width: 265,
        height: 250
    },
    btnBackBeranda:{
        alignSelf: 'flex-end',
    },
    btnBack: {
        
    }
})

export default SelesaiSoal;