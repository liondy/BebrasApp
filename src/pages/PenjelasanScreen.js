import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';

function PenjelasanScreen({navigation}){
    return(
        <View style={styles.cont}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/picture/backgrounds/combined.png')}>
                <Text style={styles.txPenjelasan}>Penjelasan</Text>
                <Text style={styles.txIsiPenjelasan}>
                Kamu dapat menggambar suatu diagram dengan kota digambarkan sebagai 
                titik dan jalur bus sebagai garis yang tidak berpotongan, seperti 
                ditunjukkan dalam gambar berikut ini. Dalam gambar terlihat jelas 
                bahwa tidakmungkin mencapai Kotalima dari Kotatiga.
                </Text>
                {/* <Image 
                style={styles.gambar} 
                source={require('../assets/picture/penjelasan/')}/> */}

            <TouchableOpacity
                onPress={()=> navigation.navigate('SelesaiSoal')}>
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
    txIsiPenjelasan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 15,
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