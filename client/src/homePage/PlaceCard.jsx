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
          <Card.Image style={styles.img}>
            <Image source={this.props.picture}/>
          </Card.Image>
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
    flex: 1,
  },
});
