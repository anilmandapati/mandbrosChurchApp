import React, {Component} from 'react';
import {Image, View} from 'react-native';
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
  Card,
  CardItem,
  Text,
  Button,
  Icon,
} from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';
export default class DailyVerseScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header>
          <Left />
          <Body>
            <Title>Daily Verse</Title>
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
            <Content style={{margin: 15}}>
              <Card
                onpress={() => this.props.navigation.navigate('AboutScreen')}>
                <CardItem>
                  {/* <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO6CdpG0hFM4lc7mzsmyJCGHbyiHFE0-oAD8IPaw33LPLaAAcW&usqp=CAU',
                  }}
                /> */}
                  <Body>
                    <Text>Daily Verse</Text>
                    <Text note>Bible verse of the Day</Text>
                  </Body>
                  {/* </Left> */}
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://www.ecopetit.cat/wpic/mpic/50-505959_bible-verse-wallpaper-desktop-background-beautiful-hd-wallpapers.jpg',
                    }}
                    style={{height: 200, width: null, flex: 1}}
                  />
                </CardItem>
                <CardItem>
                  {/* <Left> */}
                    {/* <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                    <Button transparent>
                      <Icon name="heart-empty" />
                    </Button>
                    <Button transparent>
                      <Icon active name="share" />
                      {/* <Text>Share</Text> 
                    </Button> */}
                  {/* </Left> */}
                   <Body>
                   
                    <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
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
                  {/* <Right>
                    <Text>View More</Text>
                  </Right> */}
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
              <Text style={{lineHeight: 30}}>
                తెలంగాణలో పదో తరగతి పరీక్షల నిర్వహణపై హైకోర్టు వేదికగా ఉత్కంఠ
                కొనసాగుతోంది. కరోనా నేపథ్యంలో పదో తరగతి పరీక్షలను వాయిదా వేయాలని
                కోరుతూ బాలకృష్ణ, సాయిమణి వరుణ్‌లు వేర్వేరుగా దాఖలు చేసిన
                వ్యాజ్యాలపై శనివారం ధర్మాసనం వీడియో కాన్ఫరెన్స్‌ ద్వారా
                విచారించింది. {'\n'}ఈ సందర్భంగా {'\n'}జీహెచ్‌ఎంసీ, రంగారెడ్డిలో
                కాకుండా కాకుండా తెలంగాణ వ్యాప్తంగా అన్ని జిల్లాల్లో పరీక్షలు
                నిర్వహంచడం సాధ్యమవుతుందా అని న్యాయస్థానం ప్రభుత్వాన్ని
                ప్రశ్నించింది.
              </Text>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
