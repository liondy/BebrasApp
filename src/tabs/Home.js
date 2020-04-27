import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    FlatList,
    BackHandler,
    Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import ToggleSwitch from 'toggle-switch-react-native';
import {
    backgroundSong,
    correct,
    wrong,
    finish
} from '../../App';
import { useNavigation } from '@react-navigation/native';
import {
    getWearItems,
    storeWearItems
} from '../components/Storage.js';

const getLastItem = async() => {
    const lastItem = await getWearItems();
    update(lastItem);
}

let wear = new Map();
getLastItem();

const update = (lastItem) => {
    wear = new Map(JSON.parse(lastItem));
}

export const updateWear = async(newWear) => {
    wear = newWear
    await storeWearItems(wear);
}

export {wear};

const DATA = [
    {
        id: '1',
        tahun: '2016',
        image: <Image source={require('../assets/picture/home/2016.png')}/>
    },
    {
        id: '2',
        tahun: '2017',
        image: <Image source={require('../assets/picture/home/2017.png')}/>
    },
    {
        id: '3',
        tahun: '2018',
        image: <Image source={require('../assets/picture/home/2018.png')}/>
    },
    {
        id: '4',
        tahun: '2019',
        image: <Image source={require('../assets/picture/home/2019.png')}/>
    }
];

var temp = 0;//variabel global yang akan menyimpan nilai tahun

function ListSoal({title,id,selectSoal}){
    const navigation = useNavigation();
    
    return(
        <TouchableOpacity 
            onPressIn={() => selectSoal(id)}
            onPress={() => navigation.navigate('StartingSoal',{
                tahunId: temp
            })
        }>
        {title}
        </TouchableOpacity>
    );
}

const HomeStack = createStackNavigator();

// mirip penggunaan class 
function Home({ navigation }) {
    const[isVisible,toggle]=React.useState(false);
    const[isMusicOn,turnMusic]=React.useState(true);
    const[wearNow,updateWearNow]=React.useState(new Map());
    const changeMusic = () => {
        turnMusic(isMusicOn => !isMusicOn);
    };

    const handleMusic = (isOn) => {
        if(isOn){
            backgroundSong.play();
            correct.setVolume(0);
            wrong.setVolume(0);
            finish.setVolume(0);
        }
        else{
            backgroundSong.stop();
            correct.setVolume(1);
            wrong.setVolume(1);
            finish.setVolume(1);
        }
    }
    
    const selectSoal = (id) => {
        temp = id;
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

    const updateItems = async() => {
        const lastWearItems = await getWearItems();
        updateWearNow(new Map(JSON.parse(lastWearItems)));
    }
    React.useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress', function(){
            Alert.alert(
                'Keluar?',
                'Apakah kamu yakin ingin keluar dari game ini?',
                [
                    {
                        text: 'Tidak',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'Iya', onPress: () => {
                        backgroundSong.stop(),
                        BackHandler.exitApp()
                    }},
                ],
                {cancelable: false},
            );
            return true;
        });
        const unsubscribe = navigation.addListener('focus',() => {
            updateItems();
        })
        return unsubscribe;
    },[navigation]);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}>
                <ScrollView
                    style={styles.contentContainer}>
                    <View style={styles.content}>
                        <View style={styles.character}>
                            <UserCharacter
                                isBeanie={wearNow.get("1")}
                                isKacamata1={wearNow.get("2")}
                                isKacamata2={wearNow.get("3")}
                                isCrown={wearNow.get("4")}
                                isPermen={wearNow.get('5')}
                                isTopi={wearNow.get("6")}
                                isDress={wearNow.get("7")}
                                isKaos={wearNow.get("8")}
                                isKemeja={wearNow.get("9")}
                            />
                        </View>
                        <View style={styles.prop}>
                            <PilihSoal/>
                        </View>
                        <View style={styles.pilihan_soal}>
                            <FlatList
                                horizontal
                                data={DATA}
                                renderItem={({ item }) => <ListSoal title={item.image} selectSoal={selectSoal} id={item.tahun}/>}
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

function UserCharacter({isBeanie,isKacamata1,isKacamata2,isCrown,isPermen,isTopi,isDress,isKaos,isKemeja}){
    return(
        <ImageBackground
            style={styles.userCharacter}
            source={require('../assets/picture/profile/original_character.png')}>
            <View>
                <Image
                    style={isBeanie==1 ? styles.pakeBeanie : styles.lepasBeanie }
                    source={require('../assets/picture/profile/beanie.png')}/>
                <Image
                    style={isCrown==1 ? styles.pakeCrown : styles.lepasCrown}
                    source={require('../assets/picture/profile/flower_crown.png')}/>
                <Image
                    style={isTopi==1 ? styles.pakeTopi : styles.lepasTopi}
                    source={require('../assets/picture/profile/topi.png')}/>
                <Image 
                    style={isKacamata1==1 ? styles.pakeKacamata1 : styles.lepasKacamata1}
                    source={require('../assets/picture/profile/kacamata.png')}/>
                <Image
                    style={isKacamata2==1 ? styles.pakeKacamata2 : styles.lepasKacamata2}
                    source={require('../assets/picture/profile/kacamata2.png')}/>
                <Image
                    style={isPermen==1 ? styles.pakePermen : styles.lepasPermen}
                    source={require('../assets/picture/profile/permen.png')}/>
                <Image 
                    style={isDress==1 ? styles.pakeDress : styles.lepasDress}
                    source={require('../assets/picture/profile/dress.png')}/>
                <Image
                    style={isKaos==1 ? styles.pakeKaos : styles.lepasKaos}
                    source={require('../assets/picture/profile/kaos.png')}/>
                <Image
                    style={isKemeja==1 ? styles.pakeKemeja : styles.lepasKemeja}
                    source={require('../assets/picture/profile/kemeja.png')}/>
            </View>
        </ImageBackground>
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
        <HomeStack.Navigator>
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
        width: 300,
        height: 300,
    },
    character: {
        alignSelf: 'baseline', //ini buat si view nya dia jd wrap content
        paddingHorizontal: 50,
        paddingTop: 60,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    pilihan_soal: {
        alignSelf: 'baseline',
        marginTop: -10,
        paddingBottom: 35
    },
    lepasBeanie : {
        resizeMode: 'stretch',
        width: 150,
        height: 120,
        marginLeft: 120,
        marginTop: -60,
        opacity: 0
    },
    pakeBeanie : {
        resizeMode: 'stretch',
        width: 150,
        height: 120,
        marginLeft: 120,
        marginTop: -60,
        opacity: 1
    },
    lepasKacamata1 :{
        resizeMode: 'stretch', 
        width: 150, 
        height: 40, 
        marginLeft: 145,
        marginTop: -10, 
        opacity: 0
    },
    pakeKacamata1 :{
        resizeMode: 'stretch', 
        width: 150, 
        height: 40, 
        marginLeft: 145,
        marginTop: -10, 
        opacity: 1
    },
    lepasKacamata2 : {
        resizeMode: 'stretch',
        width: 150,
        height : 60,
        marginLeft: 120, 
        marginTop: -60, 
        opacity: 0 
    },
    pakeKacamata2 : {
        resizeMode: 'stretch',
        width: 150, 
        height : 60,
        marginLeft: 120, 
        marginTop: -60, 
        opacity: 1
    },
    lepasCrown : {
        resizeMode: 'stretch', 
        width: 150, 
        height: 100, 
        marginLeft: 120, 
        marginTop: -100,
        opacity: 0
    },
    pakeCrown : {
        resizeMode: 'stretch', 
        width: 150, 
        height: 100, 
        marginLeft: 120, 
        marginTop: -100, 
        opacity: 1
    },
    lepasPermen : {
        resizeMode: 'stretch', 
        width: 50, 
        height: 50,
        marginLeft: 180, 
        marginTop: 40,   
        opacity: 0
    },
    pakePermen : {
        resizeMode: 'stretch', 
        width: 50, 
        height: 50, 
        marginLeft: 180, 
        marginTop: 40, 
        opacity: 1
    },
    lepasTopi : {
        resizeMode: 'stretch', 
        width: 170, 
        height: 100, 
        marginLeft: 110, 
        marginTop: -100, 
        opacity: 0
    },
    pakeTopi : {
        resizeMode: 'stretch', 
        width: 170, 
        height: 100, 
        marginLeft: 110, 
        marginTop: -100, 
        opacity: 1
    },
    lepasDress : {
        resizeMode: 'stretch', 
        width: 235, 
        height: 140, 
        marginTop: -60, 
        marginLeft: 80, 
        opacity: 0
    },
    pakeDress : {
        resizeMode: 'stretch', 
        width: 235, 
        height: 120, 
        marginTop: -60, 
        marginLeft: 80, 
        opacity: 1
    },
    lepasKaos : {
        resizeMode: 'stretch', 
        width: 215, 
        height: 100, 
        marginLeft: 95, 
        marginTop: -160, 
        opacity: 0
    },
    pakeKaos : {
        resizeMode: 'stretch', 
        width: 215, 
        height: 100, 
        marginLeft: 95, 
        marginTop: -160, 
        opacity: 1
    },
    lepasKemeja : {
        resizeMode: 'stretch', 
        width: 210, 
        height: 100, 
        marginLeft: 90,  
        marginTop: -100,
        opacity: 0
    },
    pakeKemeja : {
        resizeMode: 'stretch', 
        width: 210, 
        height: 100, 
        marginLeft: 90, 
        marginTop: -100,
        opacity: 1
    },
});

export default HomeStackScreen;