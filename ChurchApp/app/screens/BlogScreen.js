import React, {Component} from 'react';
import {Image, View} from 'react-native';
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
  Tabs,
  Tab,
  TabHeading,
} from 'native-base';
export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{flex: 1.5}} />
          <Body>
            <Title>Blog</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>English</Text>
              </TabHeading>
            }>
            <Content style={{margin: 10}}>
              <Card
                onpress={() => this.props.navigation.navigate('AboutScreen')}>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          'http://mandbros.com/church-app-data/assets/images/blog/1-blog-eng.jpg',
                      }}
                    />
                    <Body>
                      <Text>Blog</Text>
                      <Text note>Todays Blog</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'http://mandbros.com/church-app-data/assets/images/blog/1-blog-eng.jpg',
                    }}
                    style={{height: 200, width: null, flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <View style={{flexDirection: 'row'}}>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4</Text>
                      </Button>
                      <Button transparent>
                        <Icon name="heart-empty" />
                      </Button>
                      <Button transparent>
                        <Icon active name="share" />
                        {/* <Text>Share</Text> */}
                      </Button>
                    </View>
                  </Body>
                  <Right>
                    <Text>2 min Read</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Telugu</Text>
              </TabHeading>
            }>
            <Content style={{margin: 10}}>
              <Card
                onpress={() => this.props.navigation.navigate('AboutScreen')}>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          'http://mandbros.com/church-app-data/assets/images/blog/1-blog-eng.jpg',
                      }}
                    />
                    <Body>
                      <Text>Blog</Text>
                      <Text note>Todays Blog</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'http://mandbros.com/church-app-data/assets/images/blog/1-blog-tel.jpg',
                    }}
                    style={{height: 200, width: null, flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <View style={{flexDirection: 'row'}}>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4</Text>
                      </Button>
                      <Button transparent>
                        <Icon name="heart-empty" />
                      </Button>
                      <Button transparent>
                        <Icon active name="share" />
                        {/* <Text>Share</Text> */}
                      </Button>
                    </View>
                  </Body>
                  <Right>
                    <Text>2 min Read</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
