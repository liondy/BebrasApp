import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profil from '../tabs/Profile';
import Toko from '../tabs/Shop';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profil" component={Profil} />
            <Tab.Screen name="Toko" component={Toko} />
        </Tab.Navigator>
    );
}

export default HomeScreen;