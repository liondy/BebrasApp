import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ImageBackground
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { DATA,bought } from '../tabs/Shop';

const ProfileStack = createStackNavigator();

function Profile() {
    return (
        <View style={styles.content}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}
            >
                <View
                    style={styles.karakterContainer}
                >
                    <Image
                        style={styles.character}
                        source={require('../assets/picture/profile/original_character.png')}
                    />
                </View>
                <View
                    style={styles.acc}
                >

                </View>
            </ImageBackground>
        </View>
    );
}

function ProfileTitle(){
    return(
        <Image
            style={styles.title}
            source={require('../assets/picture/profile/judul.png')}
        />
    );
}

function ProfileStackScreen(){
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Toko"
                component={Profile}
                options={{
                    headerTitle: props => <ProfileTitle {...props}/>,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    }
                }}
            />
        </ProfileStack.Navigator>
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
    },
    title:{
        width: 200,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 30
    },
    karakterContainer:{
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    acc:{
        height: '30%',
        backgroundColor: 'blue'
    },
    character:{
        width: 350,
        height: 350
    }
});

export default ProfileStackScreen;