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
                Terdapat dua jenis anjing yang berbaris seperti tampak dalam gambar berikut ini:{"\n"}
                    {/* <Image></Image> */}
                    <Text>
                    Suatu pertukaran tempat dapat terjadi antara dua anjing yang berdiri bersebelahan. 
                    Akan dilakukan beberapa kali pertukaran tempat, sehingga tiga anjing besar akan 
                    berdiri dalam tiga posisi yang bersebelahan.{"\n"}
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