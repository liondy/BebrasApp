/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return(
        <View style={styles.sectionContainer}>
            <Text>Hello!</Text>
        </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
      flex: 1,
  }
});

export default App;

