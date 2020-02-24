import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    FlatList
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundSong } from '../../App';

const DATA = [
    {
        id: '1',
        title: '2016',
        image: <Image source={require('../assets/picture/home/2016.png')}/>
    },
    {
        id: '2',
        title: '2017',
        image: <Image source={require('../assets/picture/home/2017.png')}/>
    },
    {
        id: '3',
        title: '2018',
        image: <Image source={require('../assets/picture/home/2018.png')}/>
    },
    {
        id: '4',
        title: '2019',
        image: <Image source={require('../assets/picture/home/2019.png')}/>
    }
];

function Soal({title}){
    return(
        <TouchableOpacity>{title}</TouchableOpacity>
    );
}

const HomeStack = createStackNavigator();

function Home({ navigation }) {
    const[isVisible,toggle]=React.useState(false);
    const[isMusicOn,turnMusic]=React.useState(true);

    const changeMusic = () => {
        turnMusic(isMusicOn => !isMusicOn);
    };

    const handleMusic = (isOn) => {
        isOn? backgroundSong.play():backgroundSong.stop();
    }
    
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
                <ScrollView
                    style={styles.contentContainer}>
                    <View style={styles.content}>
                        <View style={styles.character}>
                            <UserCharacter/>
                        </View>
                        <View style={styles.prop}>
                            <PilihSoal/>
                        </View>
                        <View style={styles.pilihan_soal}>
                            <FlatList
                                horizontal
                                data={DATA}
                                renderItem={({ item }) => <Soal title={item.image}/>}
                                keyExtractor={item => item.id}
                            />
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
                            <ToggleSwitch
                                isOn={isMusicOn}
                                onColor='green'
                                label='Suara'
                                labelStyle={styles.toggleLabel}
                                size='large'
                                onToggle={
                                    isMusicOn => {
                                        changeMusic();
                                        handleMusic(isMusicOn);
                                    }
                                }
                            />
                            <Button title="Close" onPress={() => toggle(currentIsOpen => !currentIsOpen)} />
                        </View>
                    </Modal>
                </ScrollView>
            </ImageBackground>
        </View>
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
            style={styles.userCharacter}
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
    toggleLabel: {
        color: 'black',
        fontWeight: '900',
    },
    content: {
        flexDirection: 'column',
        marginTop: 0
    },
    prop: {
        alignItems: 'center'
    },
    userCharacter: {
        width: 250,
        height: 250,
    },
    character: {
        alignSelf: 'baseline', //ini buat si view nya dia jd wrap content
        paddingHorizontal: 50
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    pilihan_soal: {
        alignSelf: 'baseline',
        marginTop: -10,
        paddingBottom: 35
    }
});

export default HomeStackScreen;