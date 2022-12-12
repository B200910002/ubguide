import {Component} from 'react';
import {SearchBar} from '@rneui/base';
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
          onChangeText={this.updateSearch}
          value={search}
          style={styles.search}
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
