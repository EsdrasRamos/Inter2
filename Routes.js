import {createAppContainer,} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Signup from './Signup';
import Login from './Login';
import Info from './Info';


const DrawerNavigator = createDrawerNavigator (
    {
        Login: { screen: Login }
    },{
        initialRouteName: 'Login'
    }
  )

const screen ={
    Login:{screen: Login},
    Signup:{screen: Signup},
    Info:{screen: Info}
}

const Routes = createStackNavigator(screen);

export default createAppContainer(Routes); 