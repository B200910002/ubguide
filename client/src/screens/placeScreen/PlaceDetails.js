import {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Axios from 'axios';
import {PLACE_URL} from '../../config';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {},
      city: '',
      st: '',
      hr: '',
      d: '',
      numbers: [],
      pictures: [],
      comments: [],
    };
  }

  async componentDidMount() {
    await this.getById(1);
    await this.getComments(1);
  }

  async componentDidUpdate() {
    await this.getById(1);
    await this.getComments(1);
  }

  async getById(id) {
    await Axios.get(`${PLACE_URL}/get/${id}`).then(response => {
      this.setState({place: response.data});
      this.setState({
        city: this.state.place.haygid.horoolavlah_horoocode
          .DuuregSumiinLavlah_DuuregSumiinCode.HotAimgiinLavlah_HotAimgiinCode
          .HotAimgiinNer,
      });
      this.setState({
        st: this.state.place.haygid.horoolavlah_horoocode
          .DuuregSumiinLavlah_DuuregSumiinCode.DuuregSumiinNer,
      });
      this.setState({
        hr: this.state.place.haygid.horoolavlah_horoocode.HorooNer,
      });
      this.setState({d: this.state.place.haygid.haygdelgerengui});
      // console.log(this.state.place);
    });
  }
  async getComments(id) {
    await Axios.get(`${PLACE_URL}/get_comment/${id}`).then(response => {
      this.setState({comments: response.data.comments});
      // console.log(this.state.comments);
    });
  }
  render() {
    const {comments} = this.state;
    return (
      <View>
        <ScrollView>
          <View>
            <Text>Title: {this.state.place.ner}</Text>
            <Text>Rating: {this.state.place.rating}</Text>
            <Text>
              Хаяг: {this.state.city}, {this.state.st}, {this.state.hr},{' '}
              {this.state.d}
            </Text>
            <Text>Утас: </Text>
            <Text>Зип код: {this.state.place.zipcode}</Text>
            <Text>Дэлгэрэнгүй:{this.state.place.delgerengui}</Text>
            <Image source={this.state.place.prozurag}></Image>
          </View>
          <View>
            <ScrollView>
              {comments.map(comment => (
                <View key={comment.commentid}>
                  <Comment
                    name={comment.userid}
                    comment={comment.commenttxt}
                    rating={comment.rating}
                    date={comment.date}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>username:{this.props.name}</Text>
        <Text>comment:{this.props.comment}</Text>
        <Text>rate:{this.props.rating}</Text>
        <Text>date:{this.props.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
