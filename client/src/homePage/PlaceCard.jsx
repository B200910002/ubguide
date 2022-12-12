import {Component} from 'react';
import {View} from 'react-native';

export default class PlaceCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
  }
}
