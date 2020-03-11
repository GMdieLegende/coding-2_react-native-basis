import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Card,
  Button,
  Platform,
} from 'react-native';
import ListView from './components/ListView';

import ListView3 from './components/ListView3';
import ListView2 from './components/ListView2';
import { Slider } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {
  createBottomTabNavigator,
  createAppContainer,
  Switch,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
/*
   TodoApp: Haupteinstiegpunkt
     render -> ListView wird angezeigt
  */

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    var custom = this.state.text;
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        
        <TextInput
          style={{ height: 40, fontSize: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text> {this.state.text} </Text>
       
      </View>
    );
  }
}

class TodoApp1 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'right',
          backgroundColor: '#F8F8F7',
          backgroundImage: 'linear-gradient(to bottom right, red, yellow)'
        }}>
        <Text style={{ color: 'white', fontSize: 40 }}> Hausaufgaben </Text>
        <Button title="Create a new List" style={{backgroundColor: 'tomato'}} onClick='screen: SettingsScreen' />
       
        <ListView />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'right',
          backgroundColor: '#F8F8F8',
        }}>
        <Text style={{ color: 'tomato', fontSize: 40 }}>Mein Tag</Text>

        <ListView2/>
      </View>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'right',
          backgroundColor: '#F8F8F8',
        }}>
        <Text style={{ color: 'tomato', fontSize: 40 }}>Test</Text>
        <ListView3 />
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://translate.google.ch' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
 
  Hausaufgaben: { screen: TodoApp1 },
  MeinTag: { screen: SettingsScreen },
  Test: { screen: Test },
  Übersetzer: { screen: App },
  Notizen: { screen: PizzaTranslator },
  
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          
        } else if (routeName === 'SettingsScreen') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

/*
 Definition der CSS-Styles
   im Objekt "styles" 
*/



export default createAppContainer(TabNavigator);
