import {Component} from 'react';
import {SearchBar} from '@rneui/base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/Ionicons";

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
import Profile from './Profile';

export default class App extends Component {
  render() {
    HEAD
    const {search} = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Хайх"
          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{backgroundColor: '#DB4646', borderWidth: 1, borderRadius: 5}}
          inputContainerStyle={{backgroundColor: 'white'}}
          placeholderTextColor={'#g5g5g5'}
          lightTheme
          round
          value={search}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
          searchIcon={{ name : "", size: 24 }}
        />
      </View>
    );

    return <MyTabs />; b157b864d39f4e31dc5d93bda14eb236a24ea113

    
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Place" component={Place} options={{title: 'Хөтөч'}} />
      <Tab.Screen name="Search" component={Search} options={{title: 'Хайх'}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Профайл'}}
      />
    </Tab.Navigator>
  );
}
