import {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Axios from 'axios';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getById(id) {
    Axios.get(`http://192.168.0.107:5000/api/v1/user/get/${id}`).then(
      response => {
        this.setState({place: response.data});
        console.log(this.state.place);
      },
    );
  }
  render() {
    return (
      <View>
        <View>
          <Image />
        </View>
        <View>
          <View>
            <Text>name: {this.props.name}</Text>
          </View>
          <View>
            <Text>gmail: {this.props.gmail}</Text>
          </View>
          <View>
            <Text>number: {this.props.number}</Text>
          </View>
          <View>
            <Text>password: {this.props.password}</Text>
          </View>
          <View>
            <Text>join date: {this.props.joinDate}</Text>
          </View>
          <View>
            <Text>language: English</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
