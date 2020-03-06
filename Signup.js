import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import Logo from './Logo';
import Form from './Form';

export default class Signup extends Component {
  render() {
    const pressHandler=()=>{
      NavigationActions('Login');
     }
    return (
      <View style={styles.container}>
        
        <Logo/>
        <Form type="Signup"/> 
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Button style={styles.signupButton} title='Login' onPress={pressHandler} />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#455a64',
    
  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText:{
    color:'rgba(0,0,0,0.5)',
    fontSize:16

  },
  signupButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }
});
