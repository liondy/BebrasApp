import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

function Home() {
    return (
        <View style={styles.content}>
            <Text>Ini halaman utama</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;