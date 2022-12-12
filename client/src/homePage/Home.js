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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
import Pictures from '../constant/Pictures';

import Place from './Place';
import Search from './Search';
import News from './News';
import Profile from './Profile';

export default class App extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Place"
          component={Place}
          options={{
            title: 'Хөшөө дурсгал',
          }}
        />
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
