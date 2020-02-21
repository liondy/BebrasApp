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


class Home extends Component {
    state={
        isModalVisible: false
    };
    toggle = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.settings}>
                    <TouchableOpacity
                        onPress={this.toggle}>
                        <Button
                            type='outline'
                            buttonStyle={styles.settings_button}
                            icon={<Image
                                source={require('../assets/picture/home/settings_icon.png')}
                            />}
                        />
                    </TouchableOpacity>
                </View>
                <ImageBackground
                    source={require('../assets/picture/backgrounds/primary.png')}
                    style={styles.background}>
                    <View style={styles.content}>
                        <View style={styles.prop}>
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
                        isVisible={this.state.isModalVisible}
                        onBackdropPress={() => this.setState({ isModalVisible: false })}
                        backdropColor="white"
                        backdropOpacity={0.8}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                    >
                        <View style={{ flex: 1 }}>
                            <Text>Modal for settings</Text>
                            <Button title="Hide modal" onPress={this.toggle} />
                        </View>
                    </Modal>
                </ImageBackground>
            </View>
        );
    }
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
    settings: {
        flexDirection: 'row-reverse'
    },
    content: {
        flexDirection: 'column',
        marginTop: 0
    },
    prop: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeStackScreen;