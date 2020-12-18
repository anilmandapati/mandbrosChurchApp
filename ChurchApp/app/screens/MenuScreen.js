import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Container,
  Header,
  Content,
  Left,
  Title,
  Body,
  Right,
  Button,
  Text,
  ListItem,
  List,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutUsScreen from './menu/AboutUsScreen';
import AudioScreen from './menu/AudioScreen';
import DailyVerseScreen from './menu/DailyVerseScreen';
import VideoScreen from './menu/VideoScreen';
import LoginScreen from './menu/LoginScreen';
import RegisterScreen from './menu/RegisterScreen';

function MenuScreenOptions({navigation}) {
  return (
    <Container>
      {/* <Header>
        <Left />
        <Body>
          <Title>Menu</Title>
        </Body>
        <Right />
      </Header> */}
      <List>
        <View style={{paddingVertical: 20}}>
          <ListItem icon onPress={() => navigation.navigate('AboutUsScreen')}>
            <Left>
              <Icon
                active
                name="ios-information-circle"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Left>
            <Body>
              <Text>About Us</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-arrow-forward"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Right>
          </ListItem>
        </View>
        <View style={{paddingBottom: 20}}>
          <ListItem icon onPress={() => navigation.navigate('AudioScreen')}>
            <Left>
              <Icon
                active
                name="ios-musical-notes"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Left>
            <Body>
              <Text>Audio Sermons</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-arrow-forward"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Right>
          </ListItem>
        </View>
        <View style={{paddingBottom: 20}}>
          <ListItem
            icon
            onPress={() => navigation.navigate('DailyVerseScreen')}>
            <Left>
              <Icon
                active
                name="md-book"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Left>
            <Body>
              <Text>Daily Verse</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-arrow-forward"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Right>
          </ListItem>
        </View>
        <View style={{paddingBottom: 20}}>
          <ListItem icon onPress={() => navigation.navigate('VideoScreen')}>
            <Left>
              <Icon
                active
                name="md-play-circle"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Left>
            <Body>
              <Text>Video Sermons</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-arrow-forward"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Right>
          </ListItem>
        </View>
        <View style={{paddingBottom: 20}}>
          <ListItem icon onPress={() => navigation.navigate('LoginScreen')}>
            <Left>
              <Icon
                active
                name="ios-people"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Left>
            <Body>
              <Text>Login</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-arrow-forward"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Right>
          </ListItem>
        </View>
        <View style={{paddingBottom: 20}}>
          <ListItem icon>
            <Left>
              <Icon
                active
                name="ios-share"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Left>
            <Body>
              <Text>Share App</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-arrow-forward"
                style={{fontSize: 20, color: 'grey'}}
              />
            </Right>
          </ListItem>
        </View>
      </List>
    </Container>
  );
}

const Stack = createStackNavigator();

function MenuScreen() {
  return (
    <Stack.Navigator initialRouteName="MenuScreenOptions">
      <Stack.Screen
        name="MenuScreenOptions"
        component={MenuScreenOptions}
        options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '40%',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '25%',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="AudioScreen"
        component={AudioScreen}
        options={{
          title: 'Audio Sermons',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '25%',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="DailyVerseScreen"
        component={DailyVerseScreen}
        options={{
          title: 'Daily Bible Verse',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '25%',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '25%',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '25%',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          title: 'Video Sermons',
          headerStyle: {
            backgroundColor: '#3e51b5',
          },
          headerTitleStyle: {
            marginLeft: '25%',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default MenuScreen;
