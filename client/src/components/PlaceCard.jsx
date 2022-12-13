import {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Card} from '@rneui/base';

export default class PlaceCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Card>
          <Card.Image style={styles.img} source={{uri: this.props.picture}} />
          <Card.Title>{this.props.title}</Card.Title>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    // alignItems: 'flex-start',
    borderRadius: 15,
  },
  img: {
    width: '100%',
  },
});
