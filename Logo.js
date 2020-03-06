import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
 
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:150,height:150}}
          source={require('./iii.png')}/>
        <Text style={styles.logoText}>INTER II</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent: 'flex-end',
    alignItems:'center',
   
  },
  logoText:{
    fontSize:11,
    marginVertical:10,
    color:'rgba(0,0,0,1)'
  }
});
