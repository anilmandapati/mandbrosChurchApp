import React, {Component} from 'react';
import {View, Share, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.verse,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Card>
          <CardItem>
            <Body>
              <Text>Daily Verse</Text>
              <Text note>Bible verse of the Day</Text>
            </Body>
            <Right>
              <Icon active name="share" onPress={this.onShare} />
            </Right>
          </CardItem>
          <CardItem>
            <Text style={{lineHeight: 30, fontSize: 18}}>
              {this.props.verse}
            </Text>
          </CardItem>
          <Text style={{textAlign: 'right', padding: 5}}>
            {this.props.verseNumber}
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  TextInputStyle: {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
