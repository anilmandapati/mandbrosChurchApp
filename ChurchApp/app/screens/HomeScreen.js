import React, {Component} from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {Container, Header, Text, Left, Body, Right, Title} from 'native-base';
import MessageCard from '../components/MessageCard';
import VerseCard from '../components/VerseCard';
import BlogCard from '../components/BlogCard';
// import Icon from 'react-native-vector-icons/Ionicons';
export default class HomeScreen extends Component {
  render() {
    const blogLineV = 'Therefore everyone who hears \n these words ...';
    const image = {
      uri:
        'https://img.freepik.com/free-vector/speech-sign-text-quiz-time-vector-illustration_7087-892.jpg?size=626&ext=jpg',
    };
    return (
      <Container>
        <Header style={{textAlign: 'center'}}>
          <Left style={{flex: 1.5}} />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <MessageCard />
          <VerseCard
            verse="Therefore everyone who hears these words of mine and puts
                  them into practice is like a wise man who built his house on
                  the rock."
            verseNumber="- Matthew 7:24"
          />
          <BlogCard
            blogHeading="Real hearted People"
            blogSubHeading="I samuel 4:7"
            blogLine={blogLineV}
            uri="http://mandbros.com/church-app-data/assets/images/blog/1-blog-eng.jpg"
          />
          <ImageBackground
            source={image}
            style={styles.image}
            resizeMode={'cover'}>
            {/* <Text style={styles.text}>Inside</Text> */}
          </ImageBackground>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
  },
  image: {
    flex: 1,
    height: 100,
    width: '100%',
    // resizeMode: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
