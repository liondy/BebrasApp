import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ImageBackground
} from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { createStackNavigator } from '@react-navigation/stack';
import { TabActions } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import {
    diamond,
    beli,
} from '../../App';
import {
    bought,
    setBought
} from '../tabs/Profile';

const DATA = [
{
    id: '1',
    nama: 'beanie',
    image: <Image source={require('../assets/picture/shop/beanie.png')}/>,
    harga: 150
},
{
    id: '2',
    nama: 'kacamata',
    image: <Image source={require('../assets/picture/shop/kacamata.png')}/>,
    harga: 200
},
{
    id: '3',
    nama: 'kacamata bajak laut',
    image: <Image source={require('../assets/picture/shop/kacamata2.png')}/>,
    harga: 200
},
{
    id: '4',
    nama: 'flower crown',
    image: <Image source={require('../assets/picture/shop/flower_crown.png')}/>,
    harga: 200
},
{
    id: '5',
    nama: 'permen',
    image: <Image source={require('../assets/picture/shop/permen.png')}/>,
    harga: 200
},
{
    id: '6',
    nama: 'topi',
    image: <Image source={require('../assets/picture/shop/topi.png')}/>,
    harga: 300
},
{
    id: '7',
    nama: 'dress',
    image: <Image source={require('../assets/picture/shop/dress.png')}/>,
    harga: 300
},
{
    id: '8',
    nama: 'kaos',
    image: <Image source={require('../assets/picture/shop/kaos.png')}/>,
    harga: 300
},
{
    id: '9',
    nama: 'kemeja',
    image: <Image source={require('../assets/picture/shop/kemeja.png')}/>,
    harga: 300
}
];

function ListBarang({item,id,nama,harga,selectItem,bought}){
    return(
        <Button
            type='clear'
            disabled={bought==true?true:null}
            disabledStyle={{opacity: 0.2}}
            onPress={()=>selectItem(id,nama,harga)}
            icon = {item}
        />
    );
}

const ShopStack = createStackNavigator();

let namaBarang;
let hargaBarang;
let idBarang;

function Shop({navigation}) {
    const[isVisible,showDialog] = React.useState(false);
    const[isBeli,showBeli] = React.useState(false);
    const[isCukup,showCukup] = React.useState(false);
    const confirmBox = (id,barang,harga) => {
        showDialog(isVisible => !isVisible);
        idBarang = id;
        namaBarang = barang;
        hargaBarang = harga;
    }
    const buyAnimation = () => {
        if (diamond < hargaBarang){
            showCukup(isCukup => !isCukup);
        }
        else{
            beli(hargaBarang);
            const newBought = new Map(bought);
            newBought.set(idBarang,!bought.get(idBarang))
            setBought(newBought)
            showBeli(isBeli => !isBeli);
            navigation.navigate('Profil',{
                screen: 'Profile',
                params: {
                    punya: idBarang
                }
            })
            // const jumpToAction = TabActions.jumpTo('Profil',{punya: idBarang});
            // navigation.dispatch(jumpToAction);
        }
    }
    navigation.setOptions({
        headerRight: () => (
            <View style={{flexDirection: "row"}}>
                <Image 
                    source={require('../assets/picture/selesaiSoal/diamond.png')}
                    style={{
                        width: 70,
                        height: 70,
                        resizeMode: 'stretch'
                    }}
                />
                <Text style={styles.txdiamond}>{diamond}</Text>
            </View>
        ),
    });
    return (
        <View style={styles.content}>
            <ImageBackground 
                source={require('../assets/picture/backgrounds/primary.png')}
                style={styles.background}
            >
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <ListBarang 
                            item={item.image} 
                            selectItem={confirmBox}
                            bought={!!bought.get(item.id)}
                            id={item.id} 
                            nama={item.nama} 
                            harga={item.harga}
                        />
                    )}
                    extraData={bought}
                    keyExtractor={item => item.id}
                />
                <Dialog
                    visible = {isVisible}
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="Lain Kali"
                                onPress={()=>{
                                    confirmBox()
                                }}
                            />
                            <DialogButton
                                text="Beli"
                                onPress={()=>{
                                    showDialog(isVisible => !isVisible);
                                    buyAnimation()
                                }}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text>Beli {namaBarang} ini dengan {hargaBarang} diamond?</Text>
                    </DialogContent>
                </Dialog>
                <Dialog
                    visible = {isBeli}
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="OK"
                                onPress={()=>{
                                    showBeli(isBeli => !isBeli);
                                }}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text>Terima kasih telah membeli {namaBarang} ini</Text>
                        <Text>Silahkan memberikan aksesoris ini</Text>
                        <Text>kepada bebras kamu ya!</Text>
                    </DialogContent>
                </Dialog>
                <Dialog
                    visible = {isCukup}
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="OK"
                                onPress={()=>{
                                    showCukup(isCukup => !isCukup);
                                }}
                            />
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <Text>Maaf, diamond kamu tidak mencukupi</Text>
                        <Text>Silahkan mengerjakan paket soal lagi</Text>
                        <Text>untuk menambah diamond kamu</Text>
                    </DialogContent>
                </Dialog>
            </ImageBackground>
        </View>
    );
}

function ShopTitle(){
    return(
        <Image
            style={styles.title}
            source={require('../assets/picture/shop/toko.png')}
        />
    );
}

function ShopStackScreen(){
    return(
        <ShopStack.Navigator>
            <ShopStack.Screen
                name="Toko"
                component={Shop}
                options={{
                    headerTitle: props => <ShopTitle {...props}/>,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0
                    }
                }}
            />
        </ShopStack.Navigator>
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
    txdiamond: {
        fontSize: 50,
        color: "#FF5733",
        marginTop: -7,
        marginLeft: -5,
        marginRight: 10
    },
    title:{
        width: 170,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 20
    },
});

export default ShopStackScreen;