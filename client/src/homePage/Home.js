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
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        style={styles}
      />
    );
  }
}
const styles = StyleSheet.create({
  search: {
    backgroundColor: '#000000',
  },
});
