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
import Pictures from '../../constants/Pictures';
import Place from '../placeScreen/Place';
import Search from '../searchScreen/Search';
import News from '../newsScreen/News';
import Profile from '../profileScreen/Profile';
import PlaceDetail from '../placeScreen/PlaceDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default class Home extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Place"
          component={Place}
          options={{
            title: 'Хөшөө дурсгал',
            tabBarIcon: () => {
              return <SvgXml xml={Pictures.homePic} width="90%" />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Хайх',
            tabBarIcon: () => {
              return <SvgXml xml={Pictures.searchPic} width="90%" />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            title: 'Мэдээ',
            tabBarIcon: () => {
              return <SvgXml xml={Pictures.newsPic} width="90%" />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Профайл',
            tabBarIcon: () => {
              return <SvgXml xml={Pictures.proPic} width="90%" />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
});
