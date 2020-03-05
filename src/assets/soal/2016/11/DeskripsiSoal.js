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
            Bebras Jordan menebang pohon dan memotongnya sehingga setiap 
            pohon menghasilkan batang pohon yang panjangnya 10 meter.{"\n"}
                {/* <Image></Image> */}
                <Text>
                Bebras Ali ingin membangun bendungan dan membutuhkan kayu sepanjang
                4 meter sebanyak 7 batang, dan kayu sepanjang 3 meter sebanyak 7 batang. 
                Ali dapat memotong batang pohon yang sudah dipotong Jordan sesuai dengan 
                keperluannya. Jordan ingin memberikan batang pohon kepada Ali dengan 
                jumlah sesedikit mungkin.{"\n"}
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