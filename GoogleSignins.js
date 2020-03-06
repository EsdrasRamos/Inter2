import React, { Component } from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes
} from '@react-native-community/google-signin';
import {View,Text,Image} from 'react-native';


export default class GoogleSignins extends React.Component {
    /* constructor(props){
        super(props)
            this.state={
                name:'',
                photo:'http://www.tiptoncommunications.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png',
                email:''
                
            }

    } */
    constructor(props) {
        super(props);
        this.state = {
          pushData: [],
          loggedIn: false
        }
      }
      _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            
            this.setState({userInfo });
            this.setState({ userInfo: userInfo, loggedIn: true });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
        //console.log(error)
    };

    getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // user has not signed in yet
            this.setState({ loggedIn: false });
          } else {
            // some other error
            this.setState({ loggedIn: false });
          }
        }
      };

      

    render() {
        return (
            <View>

                <GoogleSigninButton
                    style={{ width: 250, height: 50 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.isSigninInProgress}
                />

                {/* <Text>{this.state.name}</Text>
                <Text>{this.state.email}</Text>
                <Image source={{uri:this.state.photo}} style={{height:40, width:40}}/> */}

            </View>

        )
    }
    componentDidMount(){
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '37101431233-3jb5ekadfrmgm75d9sd9r7gd5mc8d9v0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            //accountName: '' // [Android] specifies an account name on the device that should be used
            //iosClientId:'',
        });
    }
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            //console.log(userInfo)
            //this.setState({userInfo });
            this.setState({ userInfo: userInfo, loggedIn: true });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
        //console.log(error)
    };

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
}










/* GoogleSignin.configure();

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    accountName: '', // [Android] specifies an account name on the device that should be used

});

// import statusCodes along with GoogleSignin
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

// Somewhere in your code
signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
    }
};

getCurrentUserInfo = async () => {
    try {
        const userInfo = await GoogleSignin.signInSilently();
        this.setState({ userInfo });
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // user has not signed in yet
        } else {
            // some other error
        }
    }
};

isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
};

getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
};

signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
        console.error(error);
    }
};

revokeAccess = async () => {
    try {
        await GoogleSignin.revokeAccess();
        console.log('deleted');
    } catch (error) {
        console.error(error);
    }
};

try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // google services are available
} catch (err) {
    console.error('play services are not available');
}

render() {
    <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
        disabled={this.state.isSigninInProgress} />
}

{
    idToken = string,
        serverAuthCode = string,
        scopes = Array < string> // on iOS this is empty array if no additional scopes are defined
    user = {
        email= string,
        photo= string, // url
        name= string // full name
    }
} */