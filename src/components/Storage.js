import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const storeDiamond = async(currentDiamond) => {
    console.log("store: "+JSON.stringify(currentDiamond));
    try {
        await AsyncStorage.setItem('@diamond',JSON.stringify(currentDiamond));
    } catch (error) {
        console.log("error storing current diamond");
    }
}

export const getDiamond = async() => {
    try {
        const lastDiamond = await AsyncStorage.getItem('@diamond');
        const result = 0;
        if(lastDiamond!==null){
            return parseInt(lastDiamond);
        }
        return result;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

export const storeBoughtItem = async(currentItems) => {
    console.log(currentItems);
    try {
        await AsyncStorage.setItem('@bought',JSON.stringify([...currentItems]));
    } catch (error) {
        console.log("error storing current items");
    }
}

export const getBoughtItem = async() => {
    try {
        const lastItem = await AsyncStorage.getItem('@bought');
        const result = new Map();
        if(lastItem !== null){
            return lastItem;
        }
        return result;
    } catch (error) {
        console.log("error getting the last user state");
        return error;
    }
}