import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <View>
            <Image></Image>
            <Text>
            Pada informatika, anda tidak hanya dituntut untuk merencanakan instruksi 
            untuk menyelesaikan persoalan, tetapi harus mencari solusi yang membutuhkan 
            usaha minimal. Para ahli informatika menyebutkan hal ini dengan 
            membuat solusi yang optimal.{'\n'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txIsiPenjelasan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        marginTop: 50
    },
})

export default Penjelasan;