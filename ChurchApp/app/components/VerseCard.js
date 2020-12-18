import React, {Component} from 'react';
import {View, Share, StyleSheet} from 'react-native';
import {Card, CardItem, Text, Icon, Body, Right} from 'native-base';

export default class VerseCard extends Component {
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
      <View style={styles.MainContainer}>
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
            <Text style={styles.verseText}>{this.props.verse}</Text>
          </CardItem>
          <Text style={styles.verseNumberStyle}>{this.props.verseNumber}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
  },
  verseText: {
    lineHeight: 30,
    fontSize: 18,
  },
  verseNumberStyle: {
    textAlign: 'right',
    padding: 5,
  },
});
