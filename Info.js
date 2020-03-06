import React,{Component} from 'react';

import{
 StyleSheet,
 View,
 Text,
 StatusBar,
 TextInput,
 TouchableOpacity
}from 'react-native';
import {DateTimePicker,DateSetAction} from 'react-native-modal-datetime-picker';



export default class Info extends Component
{ constructor(){
    super()
    this.state={
        isVisible: false,
        chosendate:''
    }
}

handlePicker = ()=> {
    this.setState={
        isVisible: false
    }
}
handlePicker = (datetime)=> {
    this.setState=({
        isVisible: true,
        chosendate: DateSetAction(datetime).format('MMMM,Do YYYY')
    })
}
hidePicker =()=>{
    this.setState=({
        isVisible: false

    })
}
ShowPicker = ()=> {
    this.setState={
        isVisible: true
    }
}
  render()
  {
      const send =sendInfo([
          {name: 'Esdras', surname:'Milundo',dob:'29/o7/1998', text:'I am willing to learn even if I keep failing. Novelty keep me going seeing that there is alot to learn, especialy with react native. This assignment has tought me so much in this short period of time' }
      ])
    return(
    <View style={styles.container}>
        <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Name"
            placeholderTextColor="#ffffff"
            selectionColor="#ffffff"
            onSubmitEditing={()=> this.surname.focus()}/>

        <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Surname"
            placeholderTextColor="#ffffff"
            selectionColor="#ffffff"
            ref={(input)=>this.surname = input}
            onSubmitEditing={()=> this.dob.focus()}/>

        <TouchableOpacity onPress={this.showPicker}><Text style={styles.buttonText}>Date Of Birth</Text></TouchableOpacity>
            <DateTimePicker isVisible={this.state.isVisible}
            onConfirm={this.handlePicker}
            onCnacel={this.hidePicker}
            mode={'date'}
            datePickerModeAndroid={'spinner'}
            ref={(input)=>this.dob = input}
            onSubmitEditing={()=> this.textArea.focus()}/>
            <Text style={(color='#ffffff',Fontsize=16)}>
                {this.state.chosendate}
            </Text>

        <TextInput style={styles.inputBox}
            multiline
            numberOfLines={8}
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Why are you the best candidate?"
            placeholderTextColor="#ffffff"
            selectionColor="#ffffff"
            ref={(input)=>this.textArea = input}
            onSubmitEditing={()=> this.password.focus()}/>
            
        

            {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> */}

            <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
            </View>
    </View>
    )
  }

}

handleEmail = () => {
    const to = ['ramosesdras94@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: [], // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: '',
        body: {sendInfo:name, sendInfo:surname, sendInfo:dob,sendInfo:text}
    }).catch(console.error)
}



const styles = StyleSheet.create({
    container:{
      flexGrow:1,
      justifyContent:'center',
      alignItems: 'center'        
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:25, 
        paddingHorizontal: 16,
        fontSize:16,  
        color:'#ffffff',
        marginVertical:18
    },

    button:{
        width:300,
        backgroundColor:'#1c313a',
        borderRadius:25,
        marginVertical:18,
        paddingVertical:'10'
    },

    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'

    }

});