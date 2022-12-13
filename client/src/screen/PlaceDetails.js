import {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Axios from 'axios';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {place: []};
  }
  getById(id) {
    Axios.get(`http://192.168.0.107:5000/api/v1/entertainment/get/${id}`).then(
      response => {
        this.setState({place: response.data});
        // console.log(this.state.place);
      },
    );
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text>Title</Text>
            <Text>Rating</Text>
            <Text>Хаяг:</Text>
            <Text>Утас:</Text>
            <Text>Зип код:</Text>
            <Text>Дэлгэрэнгүй:</Text>
            <Image></Image>
          </View>
          <View>
            <Text>Commnets</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
