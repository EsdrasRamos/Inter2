import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import GoogleSignins from './GoogleSignins';
import Routes from './Routes';
 
export default class Forms extends Component {
  render() {

    const pressHandler=()=>{
      NavigationActions('Info');
     }

    return (
      <View style={styles.container}>
          <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Email"
          placeholderTextColor='#ffffff'/>

          <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor='#ffffff'/>

          <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText} onPress={pressHandler}>{this.props.type}</Text>
          </TouchableOpacity>
          <GoogleSignins/>
        <Text> </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent: 'center',
    alignItems:'center'
    
   
  },
  inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:18
  },
  button:{
    width:300,
    backgroundColor:'#1c313a',
    borderRadius:25,
    marginVertical:18,
    paddingVertical:10
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'

  }
}); 