import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    Image
} from 'react-native';

function DeskripsiSoal(){
    return(
        <ScrollView>
            <Text style={styles.textSoal} numberOflines={10}>
            Seekor berang-berang menemukan sebuah roda cipher untuk 
            membuat pesan rahasia. Hanya roda dalam yang dapat berputar 
            berlawanan arah jarum jam, seperti dapat dilihat pada Gambar 1. 
            Saat kunci adalah 0, ‘A’ dikode sebagai ‘a'. Seperti ditunjukkan 
            pada gambar 2, saat kunci adalah A (sebab roda dalam digeser 1 
            posisi berlawanan arah jarum jam), 'A' dikode sebagai 'b'.{"\n"}
                <Text>Dengan kunci=1, kita akan meng-kode pesan “TANTANGAN BEBRAS” menjadi “uboubohbo cfcsbt”.{"\n"}</Text>
            </Text>
            <Image style={styles.gmbr}source={require('./img/gbr1.png')}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bgSoal:{
        width: '100%',
        height: '100%'
    },
    textSoal:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15
    },
    gmbr: {
        resizeMode: 'stretch',
        width: 350,
        height: 300,
        marginLeft: 5
    }
})

export default DeskripsiSoal;