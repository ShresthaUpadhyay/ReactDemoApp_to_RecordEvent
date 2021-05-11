import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import login from './login';
import Home from './homepage';

const screens = {
    Login: {
        screen : login
    },
    Home : {
        screen : Home
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);