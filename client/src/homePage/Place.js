import {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {PricingCard} from '@rneui/base';
import {Card} from '@rneui/base';
import {Axios} from 'axios';

export default class Place extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Хөшөө дурсгал</Text>
        <ScrollView>
          {/* <Lab9_1 /> */}
          {/* <Lab9_1 /> */}
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
    <View>
      <Text>title</Text>
      <Card>
        <Card.Divider>
          <Card.Image>
            <Image source={imgsrc} />
          </Card.Image>
        </Card.Divider>
        <Card.Title style={styles.card}>title</Card.Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
  },
});
