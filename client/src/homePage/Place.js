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
    await Axios.get('http://localhost:5000/api/v1/entertainment/get').then((response) =>
      this.setState(
        {
          places: response.data.entertainments,
          count: response.data.count,
        },
      ),
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

const Lab9_1 = () => {
  return (
    <PricingCard
      color="#4f9deb"
      title="Free"
      price="$0"
      info={['1 User', 'Basic Support', 'All Core Features']}
      button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
    />
  );
};

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
