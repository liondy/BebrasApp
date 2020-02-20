import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

function Home() {
    return (
        <View style={styles.content}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background:{
        width:'100%',
        height:'100%'
    }
});

export default Home;