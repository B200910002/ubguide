import {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Axios from 'axios';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {place: []};
  }
  getById(id) {
    Axios.get(`http://localhost:5000/api/v1/entertainment/get/${id}`).then(
      response => {
        this.setState({place: response.data});
        console.log(this.state.place)
      },
    );
  }
  render() {
    return (
      <View>
        <ScrollView></ScrollView>
      </View>
    );
  }
}
