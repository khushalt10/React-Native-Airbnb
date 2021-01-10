/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import SearchResultScreen from './src/screens/SearchResults';
import 'react-native-gesture-handler'
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Router />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    
  }
});

export default App;
