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
                Sebuah robot pengecat mula-mula mempunyai 4 kaleng 
                masing-masing berisi cat merah (M), hijau (H), 
                kuning (K) dan biru (B). Ia akan mengecat pagar 
                si Bebras yang dibuat dari deretan papan dan akan 
                mewarnai setiap papan dengan satu warna. 
                Kemudian ia akan mewarnai papan berikutnya dengan 
                warna yang berikutnya sesuai urutan merah, hijau, kuning, 
                biru (M-H-K-B). Jika robot sudah mewarnai dengan warna terakhir, 
                ia akan kembali memakai warna pertama.{'\n'}
                
                Jika salah satu kaleng catnya habis, robot akan melemparkan 
                kaleng cat itu, dan terus mewarnai dengan kaleng-kaleng cat tersisa. 
                Dan seterusnya, sehingga semua kaleng cat kosong, atau 
                tersisa cat di satu kaleng karena dua papan berurutan 
                tak boleh berwarna sama.{"\n"}
                    {/* <Image></Image> */}
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