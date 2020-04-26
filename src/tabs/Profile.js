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
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    storeBoughtItem,
    getBoughtItem
} from '../components/Storage.js';
import {
    wear,
    updateWear
} from './Home.js';

const getLastItemBought = async() => {
    const lastBought = await getBoughtItem();
    setLastBought(lastBought)
}

let bought = new Map();
getLastItemBought();

const setLastBought = (newBought) => {
    bought = new Map(JSON.parse(newBought));
}

export {bought};

export async function setBought(newBought){
    bought = newBought;
    await storeBoughtItem(bought);
}

const DATA = [
    {
        id: '1',
        nama: 'beanie',
        image: <Image
                    style={{width: 150,height: 150,resizeMode: 'stretch'}}
                    source={require('../assets/picture/profile/beanie.png')}/>
    },
    {
        id: '2',
        nama: 'kacamata',
        image: <Image source={require('../assets/picture/profile/kacamata.png')}/>
    },
    {
        id: '3',
        nama: 'kacamata 2',
        image: <Image source={require('../assets/picture/profile/kacamata2.png')}/>
    },
    {
        id: '4',
        nama: 'flower crown',
        image: <Image
                style={{width: 150,height: 150,resizeMode: 'stretch'}}
                source={require('../assets/picture/profile/flower_crown.png')}/>
    },
    {
        id: '5',
        nama: 'permen',
        image: <Image
                style={{width: 100,height: 100,resizeMode: 'stretch'}}
                source={require('../assets/picture/profile/permen.png')}/>
    },
    {
        id: '6',
        nama: 'topi',
        image: <Image
                style={{width: 150,height: 150,resizeMode: 'stretch'}}
                source={require('../assets/picture/profile/topi.png')}/>
    },
    {
        id: '7',
        nama: 'dress',
        image: <Image
                style={{width: 150,height: 150,resizeMode: 'stretch'}}
                source={require('../assets/picture/profile/dress.png')}/>
    },
    {
        id: '8',
        nama: 'kaos',
        image: <Image
                style={{width: 150,height: 150,resizeMode: 'stretch'}}
                source={require('../assets/picture/profile/kaos.png')}/>
    },
    {
        id: '9',
        nama: 'kemeja',
        image: <Image
                style={{width: 150,height: 150,resizeMode: 'stretch'}}
                source={require('../assets/picture/profile/kemeja.png')}/>
    },
];

const ProfileStack = createStackNavigator();

function ListBarang({item,id,nama,selectedid}){
    if (bought.get(id)){
        return(
            <TouchableOpacity
                onPressIn={() => selectedid(id)}>
                <Button
                    type='outline'
                    buttonStyle={{width: 150, height: 150, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 10}}
                    icon = {item}
                />
            </TouchableOpacity>
        );
    }
    else{
        return(
            <></>
        );
    }
}

let klikId = 0

function Profile({navigation}) {
    const[isBeanie,lepasBeanie] = React.useState(wear.get("1"));
    const[isKacamata1,lepasKacamata1] = React.useState(wear.get("2"));
    const[isKacamata2,lepasKacamata2] = React.useState(wear.get("3"));
    const[isCrown,lepasCrown] = React.useState(wear.get("4"));
    const[isPermen,lepasPermen] = React.useState(wear.get("5"));
    const[isTopi,lepasTopi] = React.useState(wear.get("6"));
    const[isDress,lepasDress] = React.useState(wear.get("7"));
    const[isKaos,lepasKaos] = React.useState(wear.get("8"));
    const[isKemeja,lepasKemeja] = React.useState(wear.get("9"));

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => {navigation.navigate('Beranda',{
                    screen: 'Home'
                })
                }}>
                <Button
                    type='outline'
                    buttonStyle={styles.settings_button}
                    title="Simpan"
                />
            </TouchableOpacity>
        ),
    });

    const selectedid = (id) => {
        klikId = id;
        setOp();
    }

    const setOp = () => {
        const newAcc = new Map(wear);
        newAcc.set(klikId,wear.get(klikId)==0?1:0);
        if(klikId==1){
            if(isCrown==1){
                lepasCrown(isCrown==0? 1 : 0); //lepas crown
                lepasBeanie(isBeanie==0 ? 1 : 0); //pakai beanie
                newAcc.set("4",0);
            }
            else if(isTopi==1){
                lepasTopi(isTopi==0? 1 : 0); //lepas topi
                lepasBeanie(isBeanie==0 ? 1 : 0); //pakai beanie
                newAcc.set("6",0);
            }
            else{
                lepasBeanie(isBeanie==0 ? 1 : 0); //pakai beanie
            }
        }
        else if(klikId==2){
            if(isKacamata2==1){
                lepasKacamata2(isKacamata2==0? 1 : 0); //lepas kacamata 2
                lepasKacamata1(isKacamata1==0? 1 : 0);
                newAcc.set("3",0);
            }
            else{
                lepasKacamata1(isKacamata1==0? 1 : 0);
            }
        }
        else if(klikId==3){
            if(isKacamata1==1){
                lepasKacamata1(isKacamata1==0? 1 : 0); //lepas kacamata 1
                lepasKacamata2(isKacamata2==0? 1 : 0);
                newAcc.set("2",0);
            }
            else{
                lepasKacamata2(isKacamata2==0? 1 : 0);
            }
        }
        else if(klikId==4){
            if(isBeanie==1){
                lepasBeanie(isBeanie==0 ? 1 : 0);
                lepasCrown(isCrown==0? 1 : 0);
                newAcc.set("1",0);
            }
            else if(isTopi==1){
                lepasTopi(isTopi==0? 1 : 0);
                lepasCrown(isCrown==0? 1 : 0);
                newAcc.set("6",0);
            }
            else{
                lepasCrown(isCrown==0? 1 : 0);
            }
        }
        else if(klikId==5){
            if(isKaos==1){
                lepasKaos(isKaos==0? 1 : 0);
                lepasPermen(isPermen==0? 1 : 0);
                newAcc.set("8",0);
            }
            else if(isKemeja==1){
                lepasKemeja(isKemeja==0 ? 1 : 0);
                lepasPermen(isPermen==0? 1 : 0);
                newAcc.set("9",0);
            }
            else if(isDress==1){
                lepasDress(isDress==0? 1 : 0);
                lepasPermen(isPermen==0? 1 : 0);
                newAcc.set("7",0);
            }
            else{
                lepasPermen(isPermen==0? 1 : 0);
            }
        }
        else if(klikId==6){
            if(isBeanie==1){
                lepasBeanie(isBeanie==0 ? 1 : 0);
                lepasTopi(isTopi==0? 1 : 0);
                newAcc.set("1",0);
            }
            else if(isCrown==1){
                lepasCrown(isCrown==0? 1 : 0);
                lepasTopi(isTopi==0? 1 : 0);
                newAcc.set("4",0);
            }
            else{
                lepasTopi(isTopi==0? 1 : 0);
            }
        }
        else if(klikId==7){
            if(isKaos==1){
                lepasKaos(isKaos==0? 1 : 0);
                lepasDress(isDress==0? 1 : 0);
                newAcc.set("8",0);
            }
            else if(isKemeja==1){
                lepasKemeja(isKemeja==0 ? 1 : 0);
                lepasDress(isDress==0? 1 : 0);
                newAcc.set("9",0);
            }
            else if(isPermen==1){
                lepasPermen(isPermen==0? 1 : 0);
                lepasDress(isDress==0 ? 1 : 0);
                newAcc.set("5",0);
            }
            else{
                lepasDress(isDress==0? 1 : 0);
            }
        }
        else if(klikId==8){
            if(isDress==1){
                lepasDress(isDress==0? 1 : 0);
                lepasKaos(isKaos==0? 1 : 0);
                newAcc.set("7",0);
            }
            else if(isKemeja==1){
                lepasKemeja(isKemeja==0 ? 1 : 0);
                lepasKaos(isKaos==0? 1 : 0);
                newAcc.set("9",0);
            }
            else if(isPermen==1){
                lepasPermen(isPermen==0? 1 : 0);
                lepasKaos(isKaos==0 ? 1 : 0);
                newAcc.set("5",0);
            }
            else{
                lepasKaos(isKaos==0? 1 : 0);
            }
            
        }
        else if(klikId==9){
            if(isDress==1){
                lepasDress(isDress==0? 1 : 0);
                lepasKemeja(isKemeja==0 ? 1 : 0);
                newAcc.set("7",0);
            }
            else if(isKaos==1){
                lepasKaos(isKaos==0? 1 : 0);
                lepasKemeja(isKemeja==0 ? 1 : 0);
                newAcc.set("8",0);
            }
            else if(isPermen==1){
                lepasPermen(isPermen==0? 1 : 0);
                lepasKemeja(isKemeja==0 ? 1 : 0);
                newAcc.set("5",0);
            }
            else{
                lepasKemeja(isKemeja==0 ? 1 : 0);
            }
        }
        updateWear(newAcc);
    }

    return (
        <View style={styles.content}>
            <ImageBackground
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}
            >
                <View
                    style={styles.karakterContainer}
                >
                    <ImageBackground
                        style={styles.character}
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
                </View>
                <View>
                    
                </View>
                <View
                    style={styles.acc}
                >
                    {
                        bought.size == 0 ?
                        <ImageBackground
                            style = {styles.bg}
                            imageStyle={{borderRadius: 50}}
                            source = {require('../assets/picture/backgrounds/bgsoal.png')}>
                            <Text
                                style={styles.nullText}>
                                Kamu tidak memiliki barang apapun!{"\n"}
                                Silahkan membeli barang di toko terlebih dahulu ya!
                            </Text>
                        </ImageBackground> :
                        <FlatList
                            horizontal
                            data={DATA}
                            renderItem={({ item }) => (
                                <ListBarang 
                                    item={item.image}
                                    id={item.id} 
                                    nama={item.nama}
                                    selectedid={selectedid}
                                />
                            )}
                            extraData={bought}
                            keyExtractor={item => item.id}
                        />
                    }
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
                name="Profile"
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
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    acc:{
        height: '50%',
        marginBottom: 50
    },
    character:{
        width: 300,
        height: 300
    },
    nullText:{
        color : '#eb2f06',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        margin : 10,
        textAlign: 'justify'
    },
    bg:{
        marginTop: 20,
        resizeMode : 'stretch',
        width : '100%',
        height : '85%',
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

export default ProfileStackScreen;