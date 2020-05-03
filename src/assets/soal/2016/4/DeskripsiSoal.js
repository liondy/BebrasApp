import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ImageBackground
        style={styles.background}
        source={require('./img/bgsoal.png')}>
            <View style={{padding: 10, marginBottom: 30}}>
        <ScrollView>
                <Text style={styles.textSoal} numberOflines={10}>
                Si berang-berang ingin menjadi ninja dan menentukan namanya. 
                Nama Ninja dibuat dengan mengganti setiap huruf yang berasal
                dari nama sesungguhnya dengan suku-suku kata sesuai dengan 
                tabel berikut:{"\n"}
                Misalnya "BEBRAS" mmemiliki nama ninja "pikupishikaari”.{"\n"}
                </Text>
                <Image style={styles.gmbr} source={require('./img/gbr1.png')}/>
        </ScrollView>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        resizeMode: 'stretch',
        width: 370,
        height: 600,
        alignSelf: 'center'
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        textAlign: 'justify'
    },
    gmbr: {
        width: 350,
        height: 300,
        alignSelf:'center',
        resizeMode: 'contain',
        marginTop: -60
    }
})

export default DeskripsiSoal;