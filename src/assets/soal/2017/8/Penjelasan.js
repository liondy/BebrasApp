import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <View>
            <Text>
                Kalau ada jembatan Ho-To, jika Ho-Ka atau Ka-To terputus, 
                To masih terhubung. Selain itu, Ka masih terhubung juga 
                melalui To kalau jembatan Ho-Ka putus.{'\n'}
            </Text>

            <Text>
                Kalau ada jembatan No dan Ma:{'\n'}
                 Ma masih terhubung melalui No, jika jembatan Ho-Ka atau Ka-Ma terputus.{'\n'}
                 No terhubung dengan Ka dan Ma, jika jembatan Ho-No terputus.{'\n'}
                 Ka masih terhubung melalui No dan Ma, jika jembatan Ho-Ka putus.{'\n'}
                Jembatan Ma-To tidak dapat menghubungkan No kalau jembatan Ho-No terputus.{'\n'}
                Jembatan Ka-No tidak dapat menghubungkan To jika jembatan Ho-Ka atau Ka-To putus.{'\n'}
            </Text> 

            <Text>
            Jaringan kabel yang dibuat untuk kepulauan Honomakato menggambarkan 
            hanya sebagian kecil dari seluruh internet. Strukturnya menunjukkan 
            contoh dari semua jaringan internat secara global: komputer, HP, 
            televisi, CCTV, dan apapun yang terkoneksi ke Internet saat ini, 
            dapat digambarkan sebagai jejaring dari simpul, seperti pulau-pulau 
            pada jaringan Honomakato.{'\n'}
            Pada tahun 1960, motivasi utama dari penemuan internet adalah untuk 
            membangun sebuah jejaring yang dengan cepat pulih jika ada masalah 
            (“resilien”). Khususnya, tidak berfungsinya sebuah simpul tidak 
            menyebabkah seluruh jaringan menjadi lumpuh (tak berfungsi). 
            Jenis jejaring selain internet, misalnya jejaring lalulintas antar kota, 
            pengiriman logistik, juga sama pentingnya agar tidak mempunyai satu simpul 
            yang jika lumpuh dapat menyebabkan semua jaringan lumpuh.
            Ilmuwan/Ahli informatika menggunakan teori graf untuk menalarkan sebuah jaringan.
            Sebuah graf adalah sebuah jaringan terdiri dari simpul dan penghubung (jalur) antar 
            simpul. Sebuah graf disebut “terhubung”, jika setiap pasangan A dan B terhubung, 
            yaitu dapat mencapai A dari B melalui satu atau lebih simpul. Jika ada sebuah 
            simpul yang harus ada untuk membuat graf tersebut terhubung, maka simpul tersebut 
            disebut “jembatan”. Dalam sebuah jaringan yang cepat pulih terhubung kembali saat 
            sebuah simpul gagal berfungsi, harus dihindari adanya simpul “jembatan”. Untungnya, 
            ada algoritma untuk mengenali simpul “jembatan”. Robert Tarjan menemukan 
            sebuah algoritma mendeteksi simpul jembatan yang efisien – dan juga banyak algoritma lainnya.{'\n'}
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