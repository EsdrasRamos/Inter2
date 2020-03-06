/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Login from './Login';
import Signup from './Signup';

import Routes from './Routes';

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"
        />
        <Routes/>
       
      </View>
      
    );
    
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#455a64'
  },
  

});


