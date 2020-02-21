import React from 'react';
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
const HomeStack = createStackNavigator();


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

function HomeTitle(){
    return(
        <Image
            style={styles.homeTitle}
            source={require('../assets/picture/home/beranda.png')}
        />
    );
}

function SettingsLogo({navigation}){
    return(
            <Button
                type='outline'
                buttonStyle={styles.settings_button}
                containerStyle={styles.containerStyle}
                onPress={() => navigation.navigate('setting')}
                icon={<Image
                    style={styles.settings}
                    source={require('../assets/picture/home/settings_icon.png')}
                />}
            />
    )
}

function ModalScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>Settings</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    )
}

const RootStack = createStackNavigator();

function HomeStackScreen(){
    return(
        <HomeStack.Navigator mode="modal">
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: props => <HomeTitle {...props}/>,
                    headerRight: props => <SettingsLogo {...props}/>,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    }
                }}
            />
        </HomeStack.Navigator>
    );
}

function RootStackScreen(){
    return(
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={HomeStackScreen}
                options={{
                    headerShown:false
                }}
            />
            <RootStack.Screen name="setting" component={ModalScreen}/>
        </RootStack.Navigator>
    )
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
    touchable: {
        marginRight: 30
    }
});

export default RootStackScreen;