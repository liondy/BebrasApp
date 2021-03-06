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

import Home from './src/pages/HomeScreen';
import StartingSoal from './src/pages/StartingSoal';
import IsiSoal from './src/pages/IsiSoal';
import TantanganSoal from './src/pages/TantanganSoal';
import SelesaiSoal from './src/pages/SelesaiSoal';
import PenjelasanScreen from './src/pages/PenjelasanScreen';

import {
  storeDiamond,
  getDiamond,
} from './src/components/Storage.js';


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

const getLastUserDiamond = async () => {
  const lastDiamond = await getDiamond();
  setDiamond(parseInt(15000));
}

var diamond = 0;
getLastUserDiamond();

const setDiamond = (newDiamond) => {
  diamond = newDiamond;
}

export {diamond};

export async function updateDiamond (newValue){
  diamond += newValue;
  await storeDiamond(diamond);
}

export async function beli(newValue){
  diamond -= newValue;
  await storeDiamond(diamond);
}

const Stack = createStackNavigator();

function App() {
  React.useEffect(()=>{
    SplashScreen.hide();
    backgroundSong.play();
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