
import React from 'react';
import {StyleSheet,View,Text, TouchableOpacity} from 'react-native';

export default function homepage(){
    return(
        <View style={styles.container}>
        <View style={styles.btnContainer}>
            <TouchableOpacity
            style={styles.button}>
            <Text style={styles.btnText}>press me!</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
   btnContainer: {
    flex:1,
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center'
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