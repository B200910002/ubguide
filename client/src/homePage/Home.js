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

export default class App extends Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({search});
  };
  render() {
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
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
});
