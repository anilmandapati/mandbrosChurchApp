import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Title,
  Body,
  Right,
  Text,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
export default class FavScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{flex: 1.25}} />
          <Body>
            <Title>Faviourites</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
            <Icon active name="ios-heart-empty" style={styles.iconStyle} />
            <Text>No Faviourites yet,</Text>
            <Text>Please Login to add Faviourites</Text>
            <Button block style={styles.buttonStyle}>
              <Text>Login</Text>
            </Button>
            <Button transparent>
              <Text>Don't have account ? Register</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 200,
    color: 'grey',
  },
  buttonStyle: {
    marginHorizontal: 110,
    width: 200,
    // marginLeft: 30,
    marginTop: 10,
  },
});
