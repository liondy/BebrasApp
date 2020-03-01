import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';

function PenjelasanScreen(){
    return(
        <View style={styles.cont}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/picture/backgrounds/primary.png')}>
                
                <Text>Halaman Penjelasan</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    background: {
        width: '100%',
        height: '100%'
    }
})

export default PenjelasanScreen;