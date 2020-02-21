import React from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from '../tabs/Home';
import Profil from '../tabs/Profile';
import Toko from '../tabs/Shop';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function Home(){
    return(
        <TouchableOpacity>
            <Image
                style={styles.tabIcon}
                source={require('../assets/picture/tabs/beranda_tab.png')}
            />
        </TouchableOpacity>
    );
}

function Profile(){
    return(
        <TouchableOpacity>
            <Image
                style={styles.tabIcon}
                source={require('../assets/picture/tabs/profile_tab.png')}
            />
        </TouchableOpacity>
    )
}

function Shop(){
    return(
        <TouchableOpacity>
            <Image
                style={styles.tabIcon}
                source={require('../assets/picture/tabs/toko_tab.png')}
            />
        </TouchableOpacity>
    )
}

function HomeScreen() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    paddingHorizontal: 20,
                },
            }}>
            <Tab.Screen
                name='Beranda'
                component={Beranda}
                options={{
                    tabBarIcon:({props})=>
                        <Home {...props}/>
                }}
            />
            <Tab.Screen
                name="Profil"
                component={Profil}
                options={{
                    title:'Profil',
                    tabBarIcon:({props})=>
                        <Profile {...props}/>
                }}
            />
            <Tab.Screen
                name="Toko"
                component={Toko}
                options={{
                    title:'Toko',
                    tabBarIcon:({props})=>
                        <Shop {...props}/>
                }}
            />
        </Tab.Navigator>
    );
}

const styles=StyleSheet.create({
    tabIcon:{
        width: 120,
        height: 135,
        resizeMode: 'stretch',
    }
});

export default HomeScreen;