import {Component} from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from '@rneui/base';

export default class Place extends Component {
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
          containerStyle={{
            backgroundColor: '#DB4646',
          }}
          inputContainerStyle={{backgroundColor: 'white'}}
          placeholderTextColor={'#g5g5g5'}
          lightTheme
          round
          value={search}
          onChangeText={text => this.searchFunction(text)}
          autoCorrect={false}
          searchIcon={{name: '', size: 24}}
        />
      </View>
    );
  }
}
