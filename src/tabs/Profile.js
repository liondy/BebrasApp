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
                    buttonStyle={{width: 180, height: 180, marginTop: 5, marginBottom: 5}}
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

function Profile() {
    const[isBeanie,lepasBeanie] = React.useState(0);
    const[isKacamata1,lepasKacamata1] = React.useState(0);
    const[isKacamata2,lepasKacamata2] = React.useState(0);
    const[isCrown,lepasCrown] = React.useState(0);
    const[isPermen,lepasPermen] = React.useState(0);
    const[isTopi,lepasTopi] = React.useState(0);
    const[isDress,lepasDress] = React.useState(0);
    const[isKaos,lepasKaos] = React.useState(0);
    const[isKemeja,lepasKemeja] = React.useState(0);

    const selectedid = (id) => {
        klikId = id;
        setOp();
    }

    const setOp = () => {
        if(klikId==1){
            if(isCrown==1){
                lepasCrown(isCrown==0? 1 : 0);
                lepasBeanie(isBeanie==0 ? 1 : 0);
            }
            else if(isTopi==1){
                lepasTopi(isTopi==0? 1 : 0);
                lepasBeanie(isBeanie==0 ? 1 : 0);
            }
            else{
                lepasBeanie(isBeanie==0 ? 1 : 0);
            }
        }
        else if(klikId==2){
            if(isKacamata2==1){
                lepasKacamata2(isKacamata2==0? 1 : 0);
                lepasKacamata1(isKacamata1==0? 1 : 0);
            }
            else{
                lepasKacamata1(isKacamata1==0? 1 : 0);
            }
        }
        else if(klikId==3){
            if(isKacamata1==1){
                lepasKacamata1(isKacamata1==0? 1 : 0);
                lepasKacamata2(isKacamata2==0? 1 : 0);
            }
            else{
                lepasKacamata2(isKacamata2==0? 1 : 0);
            }
        }
        else if(klikId==4){
            if(isBeanie==1){
                lepasBeanie(isBeanie==0 ? 1 : 0);
                lepasCrown(isCrown==0? 1 : 0);   
            }
            else if(isTopi==1){
                lepasTopi(isTopi==0? 1 : 0);
                lepasCrown(isCrown==0? 1 : 0);
            }
            else{
                lepasCrown(isCrown==0? 1 : 0);
            }
        }
        else if(klikId==5){
            if(isKaos==1){
                lepasKaos(isKaos==0? 1 : 0);
                lepasPermen(isPermen==0? 1 : 0);
            }
            else if(isKemeja==1){
                lepasKemeja(isKemeja==0 ? 1 : 0);
                lepasPermen(isPermen==0? 1 : 0);
            }
            else if(isDress==1){
                lepasDress(isDress==0? 1 : 0);
                lepasPermen(isPermen==0? 1 : 0);
            }
            else{
                lepasPermen(isPermen==0? 1 : 0);
            }
        }
        else if(klikId==6){
            if(isBeanie==1){
                lepasBeanie(isBeanie==0 ? 1 : 0);
                lepasTopi(isTopi==0? 1 : 0);
            }
            else if(isCrown==1){
                lepasCrown(isCrown==0? 1 : 0);
                lepasTopi(isTopi==0? 1 : 0);
            }
            else{
                lepasTopi(isTopi==0? 1 : 0);
            }
        }
        else if(klikId==7){
            if(isKaos==1){
                lepasKaos(isKaos==0? 1 : 0);
                lepasDress(isDress==0? 1 : 0);
            }
            else if(isKemeja==1){
                lepasKemeja(isKemeja==0 ? 1 : 0);
                lepasDress(isDress==0? 1 : 0);
            }
            else{
                lepasDress(isDress==0? 1 : 0);
            }
        }
        else if(klikId==8){
            if(isDress==1){
                lepasDress(isDress==0? 1 : 0);
                lepasKaos(isKaos==0? 1 : 0);
            }
            else if(isKemeja==1){
                lepasKemeja(isKemeja==0 ? 1 : 0);
                lepasKaos(isKaos==0? 1 : 0);
            }
            else{
                lepasKaos(isKaos==0? 1 : 0);
            }
            
        }
        else if(klikId==9){
            if(isDress==1){
                lepasDress(isDress==0? 1 : 0);
                lepasKemeja(isKemeja==0 ? 1 : 0);
            }
            else if(isKaos==1){
                lepasKaos(isKaos==0? 1 : 0);
                lepasKemeja(isKemeja==0 ? 1 : 0);
            }
            else{
                lepasKemeja(isKemeja==0 ? 1 : 0);
            }
        }
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
                        </View>
                        <View>
                        <Image 
                            style={isKacamata1==1 ? styles.pakeKacamata1 : styles.lepasBeanie}
                            source={require('../assets/picture/profile/kacamata.png')}/>
                        </View>
                        <View>
                        <Image
                            style={isKacamata2==1 ? styles.pakeKacamata2 : styles.lepasKacamata2}
                            source={require('../assets/picture/profile/kacamata2.png')}/>
                        </View>
                        <View>
                        <Image
                            style={isCrown==1 ? styles.pakeCrown : styles.lepasCrown}
                            source={require('../assets/picture/profile/flower_crown.png')}/>
                        </View>
                        <View>
                        <Image
                            style={isPermen==1 ? styles.pakePermen : styles.lepasPermen}
                            source={require('../assets/picture/profile/permen.png')}/>
                        </View>
                        <View>
                        <Image
                            style={isTopi==1 ? styles.pakeTopi : styles.lepasTopi}
                            source={require('../assets/picture/profile/topi.png')}/>
                        </View>
                        <View>
                        <Image 
                            style={isDress==1 ? styles.pakeDress : styles.lepasDress}
                            source={require('../assets/picture/profile/dress.png')}/>
                        </View>
                        <View>
                        <Image
                            style={isKaos==1 ? styles.pakeKaos : styles.lepasKaos}
                            source={require('../assets/picture/profile/kaos.png')}/>
                        </View>
                        <View>
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
        marginTop: -90, 
        opacity: 0 
    },
    pakeKacamata2 : {
        resizeMode: 'stretch',
        width: 150, 
        height : 60,
        marginLeft: 120, 
        marginTop: -90, 
        opacity: 1
    },
    lepasCrown : {
        resizeMode: 'stretch', 
        width: 150, 
        height: 100, 
        marginLeft: 120, 
        marginTop: -140, 
        opacity: 0
    },
    pakeCrown : {
        resizeMode: 'stretch', 
        width: 150, 
        height: 100, 
        marginLeft: 120, 
        marginTop: -140, 
        opacity: 1
    },
    lepasPermen : {
        resizeMode: 'stretch', 
        width: 50, 
        height: 50, 
        marginLeft: 180, 
        marginTop: 15, 
        opacity: 0
    },
    pakePermen : {
        resizeMode: 'stretch', 
        width: 50, 
        height: 50, 
        marginLeft: 180, 
        marginTop: 15, 
        opacity: 1
    },
    lepasTopi : {
        resizeMode: 'stretch', 
        width: 170, 
        height: 100, 
        marginLeft: 110, 
        marginTop: -200, 
        opacity: 0
    },
    pakeTopi : {
        resizeMode: 'stretch', 
        width: 170, 
        height: 100, 
        marginLeft: 110, 
        marginTop: -200, 
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
        height: 140, 
        marginTop: -60, 
        marginLeft: 80, 
        opacity: 1
    },
    lepasKaos : {
        resizeMode: 'stretch', 
        width: 220, 
        height: 110, 
        marginLeft: 95, 
        marginTop: -290, 
        opacity: 0
    },
    pakeKaos : {
        resizeMode: 'stretch', 
        width: 220, 
        height: 110, 
        marginLeft: 95, 
        marginTop: -290, 
        opacity: 1
    },
    lepasKemeja : {
        resizeMode: 'stretch', 
        width: 210, 
        height: 110, 
        marginLeft: 90, 
        marginTop: -300, 
        opacity: 0
    },
    pakeKemeja : {
        resizeMode: 'stretch', 
        width: 210, 
        height: 110, 
        marginLeft: 90, 
        marginTop: -300, 
        opacity: 1
    },
});

export default ProfileStackScreen;