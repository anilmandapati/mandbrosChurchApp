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

export default class QuizExplanationCard extends Component {
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
            <Text style={{lineHeight: 30, fontSize: 18}}>
              {this.props.id} -{this.props.question}
            </Text>
          </CardItem>
          <Text style={{paddingHorizontal: 15, lineHeight: 30, fontSize: 18}}>
             Answer- {this.props.answer}
            </Text>
          <Text style={{padding: 15, lineHeight: 30, fontSize: 18}}>
            {this.props.explanation}
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
