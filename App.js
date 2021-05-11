
import React  from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './HomeStack';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



export default function App(){
  return(
    <Navigator />
  );
}




