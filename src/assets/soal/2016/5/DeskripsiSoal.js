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
                It is time for bed! Every beaver should have a toothbrush that 
                matches their size. But look at the picture to see what has happened.{"\n"}
                </Text>
                <Image style={styles.gmbr} source={require('./img/gbr1.png')}/>
                <Text style={styles.textSoal} numberOflines={10}>
                “Not so fast!” sighs mother beaver. 
                “Eve and Chad, swap your brushes! Ann and Chad, you too!” 
                But then she does not know how to continue.   
                </Text>
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
        width: 300,
        height: 200,
        alignSelf: 'center'
    }
})

export default DeskripsiSoal;