import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

function Profile() {
    return (
        <View style={styles.content}>
            <Text>Ini halaman profil</Text>
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

export default Profile;