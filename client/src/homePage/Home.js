import {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
} from 'react-native';
import {NavigationBarTitle} from 'react-native-navbar';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Place from './Place';
import Search from './Search';
import News from './News';
import Profile from './Profile';

export default class App extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Place" component={Place} options={{title: 'Хөтөч'}} />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{title: 'Хайх'}}
        />
        <Tab.Screen name="News" component={News} options={{title: 'Мэдээ'}} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Профайл'}}
        />
      </Tab.Navigator>
    );
  }
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
});
