import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

function DeskripsiSoal(){
    return(
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
})

export default DeskripsiSoal;