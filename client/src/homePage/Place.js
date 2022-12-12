import {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Axios from 'axios';
import PlaceCard from './PlaceCard';
import {SvgXml} from 'react-native-svg';
import Pictures from '../constant/Pictures';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {places: [], count: 0};
  }

  componentDidMount() {
    this.refresh();
  }

  componentDidUpdate() {
    this.refresh();
  }

  async refresh() {
    // console.log(process.env.REACT_APP_API);
    await Axios.get('http://192.168.0.107:5000/api/v1/entertainment/get').then(
      response => {
        this.setState({
          places: response.data.entertainments,
          count: response.data.count,
        });
      },
    );
  }

  render() {
    const {places} = this.state;
    return (
      <View>
        <Text>Total:{this.state.count}</Text>
        <ScrollView>
          {places.map(place => (
            <PlaceCard
              key={place.uzwerid}
              picture={place.prozurag}
              title={place.ner}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
