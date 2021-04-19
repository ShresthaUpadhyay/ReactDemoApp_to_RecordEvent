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
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const CleverTap = require('clevertap-react-native');




 
export default class App extends React.Component{
  
  constructor(props){
    super(props);
      this.state={
        title:"",
        message: " "
      };
      
  }
  
  

  componentDidMount(){
    CleverTap.onUserLogin({'Name': 'ShreReact', 'Identity': '665665', 'Email': 'shres@R.com', 'custom1': 123});


    CleverTap.createNotificationChannel("123","CleverTap","This is a test channel",5,true);

    console.log('notification channel created');
    
    

    //adding listeners            event name                    ,        handler function
    CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (event) => {this._handleCleverTapDisplayUnitsLoaded(CleverTap.CleverTapDisplayUnitsLoaded,event);});
    
    
  }

  _handleCleverTapDisplayUnitsLoaded(eventName,event){

    console.log("payload for ",eventName," >>>> ",event);
    
    var value = event.displayUnits[0];  
    value = value.replace("[", " ");
    value = value.replace("]", " ");
    var Obj = JSON.parse(value);

    this.setState({title:Obj.content.title["text"],message : Obj.content.message["replacements"]});
  
    
    
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
  }
   
 

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
        <Text>Title of the payload : {this.state.title}</Text>
        <Text>Message of the payload : {this.state.message}</Text> 
      </View>
      );
    
    };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
});


