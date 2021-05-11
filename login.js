/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import { createStackNavigator, createAppContainer } from 'react-navigation';  

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const CleverTap = require('clevertap-react-native');



// const AppContainer = createAppContainer(AppNavigator);  

 
export default class App extends React.Component{
  
  constructor(props){
    super(props);
      // this.state={
      //   title:"",
      //   message: " "
      // };
      
  }
  
  

  componentDidMount(){
    setTimeout(function(){
    SplashScreen.hide();
    }, 1000);

    CleverTap.onUserLogin({'Name': 'Avinash Kalani', 'Identity': '9766609', 'Email': 'avinash@react.com', 'custom1': 123});


    CleverTap.createNotificationChannel("123","avi","Test channel",5,true);

    console.log('notification channel created');
    
    

    //adding listeners            event name                    ,        handler function
    // CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (event) => {this._handleCleverTapDisplayUnitsLoaded(CleverTap.CleverTapDisplayUnitsLoaded,event);});
    
    
  }

  // _handleCleverTapDisplayUnitsLoaded(eventName,event){

  //   console.log("payload for ",eventName," >>>> ",event);
    
  //   var value = event.displayUnits[0];  
  //   value = value.replace("[", " ");
  //   value = value.replace("]", " ");
  //   var Obj = JSON.parse(value);

  //   this.setState({title:Obj.content.title["text"],message : Obj.content.message["replacements"]});
  
    
    
    // console.log("Title of the payload:",obj.content.title["text"]);  // to print the payload data to console
    // console.log("Message of the payload : ",obj.content.message["og"]);

    
    // var a = 1;
    // for (const [key, value] of Object.entries(event)) {
    //   console.log(`${key}: ${value}`);
      //}
      // var str = JSON.stringify(event,null,"\t");
    // console.log(str);
    // eventdata = (obj,props)=>{
    //   return <h1>{props.obj}</h1>
    // }
  // }
   
 

  componentWillUnmount(){
    CleverTap.profileGetCleverTapID((err, res) => {
      console.log('CleverTapID', res, err);
    });
    CleverTap.removeListener(CleverTap.CleverTapDisplayUnitsLoaded);
    console.log('removing listeners....')
  }
  
  
  render(){
    return (
      
      <View style = {styles.container}>
        {/* <Text>Title of the payload : {this.state.title}</Text>
        <Text>Message of the payload : {this.state.message}</Text>  */}
        <Text style={styles.welcome}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.btnText}>Log In!</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
      
    };
}

// class ProfileScreen extends React.Component {  
//   render() {  
//       return (  
//           <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
//               <Text>Profile Screen</Text>  
//           </View>  
//   );  
//   }  
// } 

// const AppNavigator = createStackNavigator(  
//   {  
//       Home: App,  
//       Profile: ProfileScreen  
//   },  
//   {  
//       initialRouteName: "Home"  
//   }  
// ); 

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 welcome:{
  fontSize: 50,
  textAlign: "center",
  margin: 20,
  fontWeight: 'bold'
 },
 input:{
  width: "90%",
  backgroundColor: "#fff",
  borderColor: "#E73838",
  borderWidth: 1,
  padding: 15,
  marginBottom: 20,
 },
 btnContainer: {
  flexDirection: "row",
  width: "20%"
 },
 button: {
   backgroundColor: '#E73838',
   padding: 10,
   borderRadius: 5,
   width: "100%"
},
btnText: {
  fontSize: 18,
  textAlign: 'center',
  fontWeight: 'bold'
}
});


