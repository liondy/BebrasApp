import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <View>
            <Text>
            Ketiga anjing besar akan berdiri dalam tiga posisi yang bersebelahan dengan cara:{'\n'}
                 Pertukaran pertama antara anjing besar pertama ke sebelah kanan sebanyak dua kali, kemudian{'\n'}
                 Pertukaran anjing besar terakhir ke sebelah kiri sebanyak empat kali.{'\n'}
            </Text>
            <Text>
            Setiap anjing kecil harus dilibatkan dalam pertukaran karena setiap anjing kecil diletakkan di antara dua anjing besar. 
            Pertukaran dua anjing kecil tidak akan ada dampaknya sehingga pertukaran harus dilakukan antara satu anjing kecil dengan
            satu anjing besar. Karena terdapat enam anjing kecil, berarti harus ada paling sedikit enam pertukaran. Perhatikan bahwa 
            percobaan untuk memindahkan ketiga anjing besar ke sebelah kiri atau ke sebelah kanan akan membutuhkan pertukaran lebih
            dari enam kali.
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