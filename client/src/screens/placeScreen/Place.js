import {Component} from 'react';
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
    await Axios(PLACE_URL + '/get').then(response => {
      this.setState({
        places: response.data.entertainments,
        count: response.data.count,
      });
    });
  }

  click = ({navigation}) => {};

  render() {
    const Stack = createNativeStackNavigator();
    const {places} = this.state;
    return (
      <View>
        <Text>Нийт: {this.state.count}</Text>
        <ScrollView>
          {places.map(place => (
            <TouchableOpacity onPress={() => this.click}>
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

const styles = StyleSheet.create({});
