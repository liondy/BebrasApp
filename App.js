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
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/HomeScreen';

const Stack = createStackNavigator();

function Logo(){
  return(
    <Image
      style={{width: 100, height: 50}}
      source={require('./src/assets/picture/beranda.png')}
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
            headerTitle: props => <Logo {...props}/>,
            headerStyle: {
              backgroundColor: 'none',
              elevation: 0
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
      flex: 1,
  }
});

export default App;

