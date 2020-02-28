import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    Modal,
    Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import useNavigation from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity, FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

var correct = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error)=> {
    if(error){
        console.log('failed to load the sound', error)
        return
    }
})

var wrong = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error)=> {
    if(error){
        console.log('failed to load the sound', error)
        return
    }
})

function Waktu(){
    return(
        <CountDown style={styles.waktu}
            until={3*60}
            size={15}
            onFinish={()=> alert('FINISH')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FFBD33'}}
            digitTxtStyle={{color: '#F0B50B'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            separatorStyle={{color: '#F0B50B'}}
            showSeparator
        />
    )
}

var temp=0;

function Gambar(){
    console.log("nilai temp : ",temp)
    if(temp==1){
        return(
            <View style={styles.penjelasanContainer}>
                <Image source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
                <Image source={require('../assets/picture/hasilJawaban/BebrasBenar.png')}/>
                <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiBenar.png')}/>
                
            </View>
        )
    }
    else{
        return(
            <View style={styles.penjelasanContainer}>
                <Image source={require('../assets/picture/hasilJawaban/TombolPenjelasan.png')}/>
                <Image source={require('../assets/picture/hasilJawaban/BebrasSalah.png')}/>
                <Image style={styles.nilai} source={require('../assets/picture/hasilJawaban/NilaiSalah.png')}/>
            </View>
        )
    }
}

function TantanganSoal({navigation}){
    const[isVisible,toggle]=React.useState(false);
    const[isBenar,cek]=React.useState(false);

    const benar = (trigger) => {
        isBenar = trigger;
    }

    return(
        <>
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/picture/backgrounds/primary.png')}>
                <Waktu/>
                <View style={styles.tantanganCont}>
                    <ImageBackground
                        source={require('../assets/picture/tantangan/Dasar.png')}
                        style={styles.dasar}>
                        <Text style={styles.txTantangan}> 
                            Jika Joni memulai perjalanannya dari Kotatiga dengan bus,{"\n"}
                            kota mana yang tidak dapat dikunjungi?
                        </Text>
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('IsiSoal')}
                            style={styles.toBtn}>
                            <Image
                                style={styles.btnback}
                                source={require('../assets/picture/tantangan/ButtonSoal.png')}/>
                        </TouchableOpacity>
                    </ImageBackground> 
                </View> 
            </ImageBackground>
        </View>
        <View>
            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> correct.play()}
                onPress={()=> {toggle(currentIsOpen => !currentIsOpen); temp=1}}>
                <Text style={styles.txPilihan}>Kotalima</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=>  {toggle(currentIsOpen => !currentIsOpen); temp=0}}>
                <Text style={styles.txPilihan}>Kotasatu</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=>  {toggle(currentIsOpen => !currentIsOpen); temp=0}}>
                <Text style={styles.txPilihan}>Kotadua</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=>  {toggle(currentIsOpen => !currentIsOpen); temp=0}}>
                <Text style={styles.txPilihan}>Kotatiga</Text>
            </TouchableHighlight>

            <View style={styles.modalCont}>
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
                    <View style={{marginTop: 22}}>
                        <View style={{width: '100%',height: '100%'}}>
                            <Text style={styles.jawaban}>Jawaban : </Text>
                            <Text style={styles.penjelasan}>Jawaban yang benar adalah Kotalima!</Text>
                            <Gambar/>
                            
                            
                        <TouchableHighlight>
                                <Button title="Close" onPress={() => 
                                toggle(currentIsOpen => !currentIsOpen)}/>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
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
    txTantangan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
    waktu:{
        marginTop: 10
    },
    txPilihan: {
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    btnPilihan:{
        borderRadius: 50,
        marginBottom: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        height: '50%',
        width: '80%'
    },
    jawaban:{
        fontSize: 30,
        color: '#FF5733',
        fontWeight: 'bold'
    },
    penjelasan: {
        fontSize: 20,
        color: '#FF5733',
        includeFontPadding: true
    },
    penjelasanContainer: {
        flexDirection: 'row',
    },
    nilai: {
        width: 50,
        height: 50,
        marginTop: 70,
        marginRight: 10
    }
})

export default TantanganSoal;