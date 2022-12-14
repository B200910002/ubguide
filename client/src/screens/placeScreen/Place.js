import {Component, useContext, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import PlaceCard from '../../components/PlaceCard';
import ServicePlace from '../../services/ServicePlace';
import {PLACE_URL} from '../../config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import PlaceDetail from './PlaceDetails';

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
    await Axios(`${PLACE_URL}/get`).then(response => {
      this.setState({
        places: response.data.entertainments,
        count: response.data.count,
      });
    });
  }

  render() {
    const {places} = this.state;
    return (
      <View>
        <Text>Нийт: {this.state.count}</Text>
        <ScrollView>
          {places.map(place => (
            <TouchableOpacity
              key={place.uzwerid}
              onPress={() => <PlaceDetail id={place.uzwerid} />}>
              <PlaceCard
                key={place.uzwerid}
                picture={place.prozurag}
                title={place.ner}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({});
