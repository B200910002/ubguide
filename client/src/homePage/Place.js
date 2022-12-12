import {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {PricingCard} from '@rneui/base';
import {Card} from '@rneui/base';
import Axios from 'axios';

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
    await Axios.get('http://10.200.96.176:5000/api/v1/entertainment/get').then(
      response => {
        this.setState({
          places: response.data.entertainments,
          count: response.data.count,
        });
        // console.log(this.state.places);
      },
    );
  }

  render() {
    return (
      <View>
        <Text>Total:{this.state.count}</Text>
        <ScrollView>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </ScrollView>
      </View>
    );
  }
}

const imgsrc = 'http://localhost:5000/public/img/Чингис-Хаан-музей-300x225.jpg';

const PlaceCard = () => {
  return (
    <View style={styles.card}>
      <Card>
        <Card.Divider>
          <Card.Image style={styles.img}>
            <Image source={imgsrc} />
          </Card.Image>
        </Card.Divider>
        <Card.Title>title</Card.Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    // alignItems: 'flex-start',
    borderRadius: 15,
  },
  img: {
    flex: 1,
  },
});
