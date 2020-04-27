import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
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
})

export default DeskripsiSoal;