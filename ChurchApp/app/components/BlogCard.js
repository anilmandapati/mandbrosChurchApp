import React, {Component} from 'react';
import {View, Share, Image, StyleSheet} from 'react-native';
import {Card, Text, Icon, Right} from 'native-base';

export default class BlogCard extends Component {
  constructor(props) {
    super(props);
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.blogHeading,
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
          <View style={styles.cardContainer}>
            <Image source={{uri: this.props.uri}} style={styles.imageStyles} />
            <View style={styles.headingStyles}>
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}>{this.props.blogHeading}</Text>
                <Right>
                  <Icon
                    active
                    name="share"
                    onPress={this.onShare}
                    style={styles.shareButton}
                  />
                </Right>
              </View>
              <Text note>{this.props.blogSubHeading}</Text>
              <Text style={styles.blogLineText}>{this.props.blogLine}</Text>
              <Text style={styles.readText}>2 Min Read</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    marginVertical: 10,
  },
  imageStyles: {
    height: 120,
    width: 120,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  headingStyles: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  headingContainer: {
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 20,
  },
  shareButton: {
    color: '#D3D3D3',
    fontSize: 20,
  },
  blogLineText: {
    paddingTop: 10,
  },
  readText: {
    color: 'blue',
    textAlign: 'right',
  },
});
