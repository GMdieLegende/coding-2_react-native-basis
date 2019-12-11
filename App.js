import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import ListView from './components/ListView';
import { Slider } from 'react-native-elements'; 
  /*
   TodoApp: Haupteinstiegpunkt
     render -> ListView wird angezeigt
  */

class TodoApp extends Component {
  render() {
    return (
    
      <View style={styles.container}>
      <Text>
  Whats to do?
        </Text>
        
        <ListView></ListView>
        
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
      </View>
    );
  }
}




/*
 Definition der CSS-Styles
   im Objekt "styles" 
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  },
  logo: {
    height: 128,
    width: 128,
    justifyContent: 'center',
    padding: 5
  }
  
});

export default TodoApp
