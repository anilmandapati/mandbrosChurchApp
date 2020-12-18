import React from 'react';
import {
  View,
  //   Text,
  StyleSheet,
  Share,
  //   Button,
  ImageBackground,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import moment from 'moment';

export default class MessageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format('YYYY-MM-DD'),
    };
  }
  greetingText = () => {
    const now = moment();
    const currentHour = now.local().hour();
    if (currentHour >= 12 && currentHour <= 17) {
      return 'Good Afternoon';
    } else if (currentHour >= 18 && currentHour <= 23) {
      return 'Good Evening';
    } else {
      return 'Good Morning';
    }
  };

  render() {
    const today = this.state.currentDate;
    const day = moment(today).format('dddd');
    const date = moment(today).format('MMMM D, YYYY');
    const message = this.greetingText();
    const dayMessage = day + ' , ' + date;
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: message + ' ' + 'http://mandbros.com/',
          url: 'http://mandbros.com/',
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
    return (
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <ImageBackground
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
            style={styles.image}>
            {/* <View style={styles.content}> */}
            {/* <Text style={styles.day}>{day}</Text>
              <Text style={styles.small}> {date}</Text> */}
            <Text style={styles.small}>{dayMessage}</Text>
            <Text style={styles.title}>{message}</Text>
            {/* <Button onPress={onShare} title="Share" /> */}
            {/* </View> */}
          </ImageBackground>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // backgroundColor: 'orange',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
    // top: 180,
    left: 20,
  },
  day: {
    fontSize: 12,
    color: '#000',
    // textAlign: 'right',
  },
  small: {
    fontSize: 16,
    color: '#fff',
    // textAlign: 'center',
    marginLeft: 20,
  },
  cardContainer: {
    // flex: 1,
    // flexDirection: 'column',
    height: 300,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
