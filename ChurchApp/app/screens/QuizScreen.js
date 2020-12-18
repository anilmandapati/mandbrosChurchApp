import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Share, Image, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Title,
  Body,
  Right,
  Tab,
  TabHeading,
  Tabs,
  Text,
  Button,
} from 'native-base';
import EnglishQuizScreen from '../screens/EngLishQuizScreen';
import TeluguQuizScreen from '../screens/TeluguQuizScreen';
// import Icon from 'react-native-vector-icons/Ionicons';
function QuizHomeScreen({navigation}) {
  return (
    <Container>
      {/* <Header>
          <Left style={{flex: 1.5}} />
          <Body>
            <Title>Quiz</Title>
          </Body>
          <Right />
        </Header> */}
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Text>English</Text>
            </TabHeading>
          }>
          <Content style={styles.MainContainer}>
            <Image
              source={{
                uri:
                  'http://mandbros.com/church-app-data/assets/images/screen/quizEng.jpg',
              }}
              style={styles.imageStyles}
            />
            <View style={styles.buttonStyle}>
              <Button
                small
                primary
                onPress={() => navigation.navigate('EnglishQuizScreen')}>
                <Text>Start</Text>
              </Button>
            </View>
          </Content>
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Telugu</Text>
            </TabHeading>
          }>
          <Content style={styles.MainContainer}>
            <Image
              source={{
                uri:
                  'http://mandbros.com/church-app-data/assets/images/screen/quizTel.jpg',
              }}
              style={styles.imageStyles}
            />
            <View style={styles.buttonStyle}>
              <Button
                small
                primary
                onPress={() => navigation.navigate('TeluguQuizScreen')}>
                <Text>Start</Text>
              </Button>
            </View>
          </Content>
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    margin: 10,
  },
  imageStyles: {
    flex: 1,
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

const Stack = createStackNavigator();

function QuizScreen() {
  return (
    <Stack.Navigator initialRouteName="MenuScreenOptions">
      <Stack.Screen
        name="QuizHomeScreen"
        component={QuizHomeScreen}
        options={{
          title: 'Quiz',
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
        name="EnglishQuizScreen"
        component={EnglishQuizScreen}
        options={{
          title: 'Quiz',
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
        name="TeluguQuizScreen"
        component={TeluguQuizScreen}
        options={{
          title: 'Quiz',
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

export default QuizScreen;
