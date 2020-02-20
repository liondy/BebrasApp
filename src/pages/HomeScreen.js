import * as React from 'react';
import { View,Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../tabs/Home';
import Profil from '../tabs/Profile';
import Toko from '../tabs/Shop';

const Tab = createMaterialBottomTabNavigator();

function Beranda(){
    return(
        <Image
        style={{width: 100, height: 100}}
        source={require('../assets/picture/beranda_tab.png')}
        />
    );
}

function HomeScreen() {
    return (
        <Tab.Navigator 
            barStyle={{backgroundColor: 'transparent'}}>
            <Tab.Screen
                name='Beranda'
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({props}) => (
                        <View
                            style={{
                                position: 'absolute',
                                height: 150,
                                width: 100,
                                borderRadius: 58,
                            }}>
                            <Beranda {...props}/>
                        </View>
                    ),
                    tabBarColor: '#fff'
                }}
            />
            <Tab.Screen name="Profil" component={Profil} />
            <Tab.Screen name="Toko" component={Toko} />
        </Tab.Navigator>
    );
}

export default HomeScreen;