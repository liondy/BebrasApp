/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackHandler,DeviceEventEmitter} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Home from './src/pages/HomeScreen';
import StartingSoal from './src/pages/StartingSoal';
import IsiSoal from './src/pages/IsiSoal';
import TantanganSoal from './src/pages/TantanganSoal';
import SelesaiSoal from './src/pages/SelesaiSoal';
import PenjelasanScreen from './src/pages/PenjelasanScreen';

import {
  getDiamond,
  storeDiamond,
  storeBoughtItem,
  getBoughtItem
} from './src/component/Storage.js';


//bingung naro kode ini dimana
var Sound = require('react-native-sound');
var backgroundSong = new Sound('background.mp3',Sound.MAIN_BUNDLE,(error)=>{
    if(error){
        console.log('failed to load the sound',error);
        return;
    }
    backgroundSong.setNumberOfLoops(-1);
    backgroundSong.play();
});

// untuk digunakan di home agar dapat di toogle
export {backgroundSong};

var quiz = new Sound('quiz.mp3', Sound.MAIN_BUNDLE, (error)=> {
  if(error){
    console.log('failed to load the sound', error)
    return;
  }
})

export {quiz};

var correct = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error)=> {
  if(error){
      console.log('failed to load the sound', error)
      return;
  }
})

export {correct};

var wrong = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error)=> {
  if(error){
      console.log('failed to load the sound', error)
      return;
  }
})

export {wrong};

var finish = new Sound('finish.mp3', Sound.MAIN_BUNDLE, (error)=> {
  if(error){
      console.log('failed to load the sound', error)
      return;
  }
})

export {finish};

BackHandler.addEventListener('hardwareBackPress',function(){
  if(Home){
    backgroundSong.pause();
  }
})

const Stack = createStackNavigator();

function App({route}) {
  const [diamond,updateDiamond] = React.useState(0);
  const [bought,updateBought] = React.useState(new Map());
  const fetchUserLastState = async() => {
      const fetchedDiamond = await getDiamond();
      updateDiamond(fetchedDiamond);
      const fetchedBought = await getBoughtItem();
      updateBought(fetchedBought);
  }
  const addDiamond = async (newDiamond) => {
      const currentDiamond = parseInt(diamond)+parseInt(newDiamond);
      console.log("get diamond: "+currentDiamond);
      updateDiamond(currentDiamond);
      await storeDiamond(currentDiamond);
  }
  console.log("current diamond: "+diamond);
  React.useEffect(()=>{
    SplashScreen.hide();
    backgroundSong.play();
    fetchUserLastState();
    console.disableYellowBox = true;
    DeviceEventEmitter.addListener(
      'ON_HOME_BUTTON_PRESSED',
      () => {
        backgroundSong.pause();
      });
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
          initialParams={{
            diamond: diamond,
            addDiamond: addDiamond(),
          }}
        />
        <Stack.Screen
          name="StartingSoal"
          component={StartingSoal}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="IsiSoal"
          component={IsiSoal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TantanganSoal"
          component={TantanganSoal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelesaiSoal"
          component={SelesaiSoal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PenjelasanScreen"
          component={PenjelasanScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;