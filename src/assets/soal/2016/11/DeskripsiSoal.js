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
            Bebras Jordan menebang pohon dan memotongnya sehingga setiap 
            pohon menghasilkan batang pohon yang panjangnya 10 meter.
                
            Bebras Ali ingin membangun bendungan dan membutuhkan kayu sepanjang
            4 meter sebanyak 7 batang, dan kayu sepanjang 3 meter sebanyak 7 batang. 
            Ali dapat memotong batang pohon yang sudah dipotong Jordan sesuai dengan 
            keperluannya. Jordan ingin memberikan batang pohon kepada Ali dengan 
            jumlah sesedikit mungkin.{"\n"}
                
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
        resizeMode: 'stretch',
        width: 200,
        height: 100,
        alignSelf: 'center'
    }
})

export default DeskripsiSoal;