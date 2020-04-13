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

let bought = new Map();
export {bought};

export function setBought(newBought){
    bought = newBought;
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

function ListBarang({item,id,nama}){
    if (bought.get(id)){
        return(
            <Button
                type='outline'
                buttonStyle={{width: 180, height: 180, marginTop: 5, marginBottom: 5}}
                icon = {item}
            />
        );
    }
    else{
        return(
            <></>
        );
    }
}

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
        width: 350,
        height: 350
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
    }
});

export default ProfileStackScreen;