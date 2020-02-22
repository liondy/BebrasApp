import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal'
const HomeStack = createStackNavigator();

function Home({ navigation }) {
    const[isVisible,toggle]=React.useState(false);
    
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => toggle(currentIsOpen => !currentIsOpen)}>
                <Button
                    type='outline'
                    buttonStyle={styles.settings_button}
                    icon={<Image
                        source={require('../assets/picture/home/settings_icon.png')}
                    />}
                />
            </TouchableOpacity>
        ),
    });

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
                <View style={styles.content}>
                    <View style={styles.character}>
                        <UserCharacter/>
                    </View>
                    <View style={styles.prop}>
                        <PilihSoal/>
                    </View>
                    <View style={styles.prop}>
                        <Soal/>
                    </View>
                </View>
                <Modal
                    style={styles.modal}
                    isVisible={isVisible}
                    backdropColor="white"
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}>
                    <View style={styles.modal_content}>
                        <Text style={styles.contentTitle}>Modal for settings</Text>
                        <Button title="Hide modal" onPress={() => toggle(currentIsOpen => !currentIsOpen)} />
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
}

function Soal(){
    return(
        <Image
            source={require('../assets/picture/home/2016.png')}
        />
    );
}

function PilihSoal(){
    return(
        <Image
            source={require('../assets/picture/home/pilih_soal.png')}
        />
    );
}

function UserCharacter(){
    return(
        <Image
            source={require('../assets/picture/profile/original_character.png')}
        />
    )
}

function HomeTitle(){
    return(
        <Image
            style={styles.homeTitle}
            source={require('../assets/picture/home/beranda.png')}
        />
    );
}

function HomeStackScreen(){
    return(
        <HomeStack.Navigator mode="modal">
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: props => <HomeTitle {...props}/>,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    }
                }}
            />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background:{
        width:'100%',
        height:'100%'
    },
    homeTitle:{
        width: 250,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 10
    },
    settings_button: {
        backgroundColor: 'transparent',
        elevation: 50,
        padding: 10,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        height: '100%',
        width: '100%'
    },
    modal_content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    content: {
        flexDirection: 'column',
        marginTop: 0
    },
    prop: {
        alignItems: 'center'
    },
    character: {
        alignSelf: 'baseline', //ini buat si view nya dia jd wrap content
        marginLeft: -270, //remove this if the image character has been fix
        marginTop: -130 //remove this if the image character has been fix
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});

export default HomeStackScreen;