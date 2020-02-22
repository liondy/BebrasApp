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
import Home from './src/pages/HomeScreen';

//bingung naro kode ini dimana
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
var backgroundSong = new Sound('background.mp3',Sound.MAIN_BUNDLE,(error)=>{
    if(error){
        console.log('failed to load the sound',error);
        return;
    }
});

const Stack = createStackNavigator();

function App() {
  React.useEffect(()=>{
    SplashScreen.hide();
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;