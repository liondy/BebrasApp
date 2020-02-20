/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/HomeScreen';

const Stack = createStackNavigator();

function HomeTitle(){
  return(
    <Image
      style={styles.homeTitle}
      source={require('./src/assets/picture/home/beranda.png')}
    />
  );
}

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
            headerTitle: props => <HomeTitle {...props}/>,
            headerStyle: {
              backgroundColor: 'none',
              elevation: 0
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeTitle:{
    width: 250,
    height: 150,
    resizeMode: 'stretch',
    marginTop: 10
  }
});

export default App;