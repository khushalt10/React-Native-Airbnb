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
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './src/assets/data/feed'

const post1 = feed[0]
const post2 = feed[1]
const post3 = feed[2]

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Post post={post1} />
        <Post post={post2} />
        <Post post={post3} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    
  }
});

export default App;
