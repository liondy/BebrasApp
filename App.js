/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function App() {
  React.useEffect(()=>{
		SplashScreen.hide();
	},[]);
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
      flex: 1,
  }
});

export default App;

