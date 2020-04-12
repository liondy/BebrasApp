import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {
    diamond
} from '../../App';

const ShopStack = createStackNavigator();

function Shop({navigation}) {
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
            <Text>Ini toko</Text>
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